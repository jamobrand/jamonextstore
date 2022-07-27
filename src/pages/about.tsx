import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import { WebPageJsonLd } from "next-seo"
const About: NextPageWithLayout = () => {
  return (
    <>
      <Head
        title="About Jamobrand"
        description="Jamobrand is an all in one home store starting from the primary need for designing your space to turning just a place into a warm and lovely home. We're also a marketplace for home decor products such Arts,Mirrors, Carpets and Rugs, Kitchen Utensils, Storage and Organization Items and much more."
      />
      <WebPageJsonLd
        description=" Jamobrand is an all in one home store starting from the primary need for designing your space to turning just a place into a warm and lovely home."
        id="https://jamobrand.com/#OnlineBusiness"
        lastReviewed="2022-07-26T05:59:02.085Z"
        reviewedBy={{
          type: "Person",
          name: "Jamobrand",
        }}
      />
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          {/* <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200"> */}
          <div className="layout-base max-w-3xl mx-auto my-12">
            <h1 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl mb-5">
              What is Jamobrand!
            </h1>
            <p className="text-lg-regular text-gray-700 mb-3">
              Jamobrand is an all in one home store starting from the primary
              need for designing your space to turning just a place into a warm
              and lovely home.
            </p>
            <p className="text-lg-regular text-gray-700">
              We&apos;re also a marketplace for home decor products such Arts,
              Mirrors, Carpets and Rugs, Kitchen Utensils, Storage and
              Organization Items and much more.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

About.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default About
