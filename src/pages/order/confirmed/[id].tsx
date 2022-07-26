import { medusaClient } from "@lib/config"
import { IS_BROWSER } from "@lib/constants"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import OrderCompletedTemplate from "@modules/order/templates/order-completed-template"
import SkeletonOrderConfirmed from "@modules/skeletons/templates/skeleton-order-confirmed"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import { ReactElement } from "react"
import { dehydrate, QueryClient, useQuery } from "react-query"
import { NextPageWithLayout } from "types/global"

declare global {
  interface Window {
    dataLayer: Record<string, any>[]
  }
}

const fetchOrder = async (id: string) => {
  return await medusaClient.orders.retrieve(id).then(({ order }) => order)
}

const Confirmed: NextPageWithLayout = () => {
  const router = useRouter()

  const id = typeof router.query?.id === "string" ? router.query.id : ""

  const { isSuccess, data, isLoading, isError } = useQuery(
    ["get_order_confirmed", id],
    () => fetchOrder(id),
    {
      enabled: id.length > 0,
      staleTime: Infinity,
    }
  )

  if (isLoading) {
    return <SkeletonOrderConfirmed />
  }

  if (isError) {
    if (IS_BROWSER) {
      router.replace("/404")
    }

    return <SkeletonOrderConfirmed />
  }

  if (isSuccess) {
    if (typeof window !== "undefined" || !data) {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ ecommerce: null })
      window.dataLayer.push({
        event: "purchase",
        ecommerce: {
          currency: "KES",
          email: `${data.email}`,
          customerFirstName: `${data.shipping_address.first_name}`,
          customerLastName: `${data.shipping_address.last_name}`,
          customerCity: `${data.shipping_address.city}`,
          customerCounty: `${data.shipping_address.province}`,
          customerLocation: `${data.shipping_address.address_1}`,
          customerApartment: `${data.shipping_address.address_2}`,
          customerStreetName: `${data.shipping_address.postal_code}`,
          customerPhoneNumber: `${data.shipping_address.phone}`,
          customerId: `${data.customer_id}`,
          transaction_id: `${data.id}`,
          affiliation: "Jamobrand",
          tax: `${data.tax_total}`,
          shipping: `${parseFloat(
            ((data.shipping_total / 100) * 1 * 1).toFixed(2)
          )}`,
          coupon: `${data.discounts.map((discount) => discount.code)}`,
          value: `${parseFloat(((data.total / 100) * 1 * 1).toFixed(2))}`,
          items: [data.items],
        },
      })
      window.dataLayer.push({
        event: "Purchase",
        products: {
          email: `${data.email}`,
          customerFirstName: `${data.shipping_address.first_name}`,
          customerLastName: `${data.shipping_address.last_name}`,
          customerCity: `${data.shipping_address.city}`,
          customerCounty: `${data.shipping_address.province}`,
          customerLocation: `${data.shipping_address.address_1}`,
          customerApartment: `${data.shipping_address.address_2}`,
          customerStreetName: `${data.shipping_address.postal_code}`,
          customerPhoneNumber: `${data.shipping_address.phone}`,
          customerId: `${data.customer_id}`,
          content_type: "product",
          content_ids: [`${data.items.map((item) => item.variant.product_id)}`],
          value: `${parseFloat(((data.total / 100) * 1 * 1).toFixed(2))}`,
          currency: "KES",
          contents: [data.items],
          num_items: `${data.items.length}`,
        },
      })
    }
    return (
      <>
        <Head
          title="Order Confirmed"
          description="You purchase was successful"
        />

        <OrderCompletedTemplate order={data} />
      </>
    )
  }

  return <></>
}

Confirmed.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(["get_order_confirmed", id], () =>
    fetchOrder(id)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Confirmed
