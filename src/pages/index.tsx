import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import { OrganizationJsonLd } from "next-seo"

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head
        title="Jamobrand Home : Home Décor Products, Home & Kitchen & More"
        description="Browse home decor products from wallpapers, decor items and accents, kitchenware and kitchen items, organization and storage products & more from Jamobrand Home"
      />
      <OrganizationJsonLd
        type="OnlineBusiness"
        id="https://jamobrand.com/#OnlineBusiness"
        logo="https://jamobrand.com/favicon.svg?v=ffe75142f378c0bf965612740ddf9165"
        legalName="JAMO BRAND"
        name="Jamobrand"
        description="Browse home decor products from wallpapers, decor items and accents, kitchenware and kitchen items, organization and storage products & more from Jamobrand Home"
        address={{
          streetAddress: "Musindi Road",
          addressLocality: "Ngara",
          addressRegion: "NB",
          postalCode: "00400",
          addressCountry: "KE",
        }}
        contactPoint={[
          {
            telephone: "+254746381892",
            contactType: "customer service",
            areaServed: "KE",
            availableLanguage: "English",
          },
          {
            telephone: "+254746381892",
            contactType: "customer service",
            availableLanguage: "English",
          },
          {
            telephone: "+254746381892",
            contactType: "technical support",
            areaServed: "KE",
            availableLanguage: "English",
          },
        ]}
        sameAs={[
          "https://facebook.com/jamobrand",
          "https://twitter.com/jamobrand",
          "https://instagram.com/jamobrand",
          "https://linkedin.com/company/jamo-brand",
          "https://www.youtube.com/channel/UCoKNfI8YFd1Th3m5r4d7_Yg/featured",
        ]}
        url="https://jamobrand.com/"
      />
      <Hero />
      <FeaturedProducts />
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
