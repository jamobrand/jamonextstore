import { medusaClient } from "@lib/config"
import { ProductJsonLd } from "next-seo"
import { IS_BROWSER } from "@lib/constants"
import { getProductHandles } from "@lib/util/get-product-handles"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import ProductTemplate from "@modules/products/templates"
import SkeletonProductPage from "@modules/skeletons/templates/skeleton-product-page"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import { ParsedUrlQuery } from "querystring"
import { ReactElement } from "react"
import { dehydrate, QueryClient, useQuery } from "react-query"
import { NextPageWithLayout, PrefetchedPageProps } from "types/global"

interface Params extends ParsedUrlQuery {
  handle: string
}

declare global {
  interface Window {
    dataLayer: Record<string, any>[]
  }
}

const fetchProduct = async (handle: string) => {
  return await medusaClient.products
    .list({ handle })
    .then(({ products }) => products[0])
}

const ProductPage: NextPageWithLayout<PrefetchedPageProps> = ({ notFound }) => {
  const { query, isFallback, replace } = useRouter()
  const handle = typeof query.handle === "string" ? query.handle : ""

  const { data, isError, isLoading, isSuccess } = useQuery(
    [`get_product`, handle],
    () => fetchProduct(handle),
    {
      enabled: handle.length > 0,
      keepPreviousData: true,
    }
  )
  if (notFound) {
    if (IS_BROWSER) {
      replace("/404")
    }

    return <SkeletonProductPage />
  }

  if (isFallback || isLoading || !data) {
    return <SkeletonProductPage />
  }

  if (isError) {
    replace("/404")
  }

  if (typeof window !== "undefined" || !data) {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ ecommerce: null })
    window.dataLayer.push({
      event: "view_item",
      ecommerce: {
        currency: "KES",
        value: `${parseFloat(
          ((data.variants[0].prices[0].amount / 100) * 1 * 1).toFixed(2)
        )}`,
        items: [
          {
            google_business_vertical: "retail",
            item_id: `${data.id}`,
            item_category: `${data.collection.title}`,
            // item_category2: `${data.type.value || ""}`,
            item_name: `${data.title}`,
            currency: "KES",
            price: `${parseFloat(
              ((data.variants[0].prices[0].amount / 100) * 1 * 1).toFixed(2)
            )}`,
            quantity: `${data.variants[0].inventory_quantity}`,
          },
        ],
      },
    })
    window.dataLayer.push({
      event: "ViewContent",
      content: {
        content_type: "product",
        content_ids: [`${data.id}`],
        content_name: `${data.title}`,
        content_category: `${data.collection.title}`,
        value: `${parseFloat(
          ((data.variants[0].prices[0].amount / 100) * 1 * 1).toFixed(2)
        )}`,
        currency: "KES",
      },
    })
  }

  if (isSuccess) {
    return (
      <>
        <Head
          description={data.description}
          title={data.title}
          image={data.thumbnail}
        />
        <ProductJsonLd
          sku={data?.id}
          productName={data?.title}
          images={[data.thumbnail]}
          category={data.collection.title}
          description={data.description}
          weight={data.weight || ""}
          height={data.height || ""}
          material={data.material || ""}
          length={data.length || ""}
          brand="Jamobrand"
          aggregateRating={{
            ratingValue: "4.5",
            reviewCount: "1",
          }}
          offers={[
            {
              price: `${parseFloat(
                ((data.variants[0].prices[0].amount / 100) * 1 * 1).toFixed(2)
              )}`,
              priceCurrency: "KES",
              priceValidUntil: "2022-12-31",
              itemCondition: "https://schema.org/NewCondition",
              availability: `${
                data.variants[0].inventory_quantity > 0
                  ? "https://schema.org/InStock"
                  : "https://schema.org/OutStock"
              }`,
              url: `https://jamobrand.com/products/${data.handle}`,
              seller: {
                name: "Jamobrand",
              },
              shippingDetails: {
                shippingDestination: [
                  {
                    addressCountry: "KE",
                    addressRegion: ["NAIROBI", "KIAMBU", "NAKURU", "MOMBASA"],
                  },
                ],
              },
            },
          ]}
        />
        <ProductTemplate product={data} />
      </>
    )
  }

  return <></>
}

ProductPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const handles = await getProductHandles()
  return {
    paths: handles.map((handle) => ({ params: { handle } })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const handle = context.params?.handle as string

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery([`get_product`, handle], () =>
    fetchProduct(handle)
  )

  const queryData = await queryClient.getQueryData([`get_product`, handle])

  if (!queryData) {
    return {
      props: {
        notFound: true,
      },
    }
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      notFound: false,
    },
  }
}

export default ProductPage
