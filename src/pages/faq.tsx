import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import { Disclosure } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/outline"
import { FAQPageJsonLd } from "next-seo"

// @ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Faq: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Faq" description="Check out our faq for jamobrand home." />
      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: "What payment methods do you accept?",
            acceptedAnswerText:
              "We currently accept M-pesa payments only. Some orders in Nairobi will require an inital deposit for commitment and the rest will be paid after delivery. For orders outside Nairobi will require full payment.",
          },
        ]}
      />
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          {/* <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200"> */}
          <div className="layout-base max-w-3xl mx-auto my-12">
            <h1 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl mb-5">
              Frequently Asked Questions
            </h1>
            <p className="text-lg-regular text-gray-700 mb-3">
              Here you can browse a selection of the most frequently asked
              questions. If you don’t see an answer to your question then do not
              hesitate to reach out.
            </p>

            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              <Disclosure as="div" className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">
                          What payment methods do you accept?
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">
                        We currently accept M-pesa payments only. Some orders in
                        Nairobi will require an inital deposit for commitment
                        and the rest will be paid after delivery. For orders
                        outside Nairobi will require full payment.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">
                          How can I cancel or amend my order?
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">
                        Call or Text on WhatsApp at 0746 381892 and we'll be
                        able to help you.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

Faq.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Faq
