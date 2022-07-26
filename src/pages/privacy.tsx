import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import { Disclosure } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/outline"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Privacy: NextPageWithLayout = () => {
  return (
    <>
      <Head
        title="Privacy Policy"
        description="This is the privacy policy for jamobrand.com. It describes how your personal information is
        collected, used, and shared when you visit or make a purchase from jamobrand website."
      />
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          {/* <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200"> */}
          <div className="layout-base max-w-3xl mx-auto my-5">
            <h1 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl mb-5">
              Privacy Policy
            </h1>
            <p className="text-lg-regular text-gray-700">
              This Privacy Policy describes how your personal information is
              collected, used, and shared when you visit or make a purchase from
              (the “Jamobrand site”).
            </p>

            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              <Disclosure as="div" className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">
                          PERSONAL INFORMATION WE COLLECT
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
                        When you visit the Site, we automatically collect
                        certain information about your device, including
                        information about your web browser, IP address, time
                        zone, and some of the cookies that are installed on your
                        device. Additionally, as you browse the Site, we collect
                        information about the individual web pages or products
                        that you view, what websites or search terms referred
                        you to the Site, and information about how you interact
                        with the Site. We refer to this automatically-collected
                        information as Device Information.
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
                          PERSONAL INFORMATION WE COLLECT
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
                      <p className="text-base text-gray-500 mb-2">
                        “Cookies” are data files that are placed on your device
                        or computer and often include an anonymous unique
                        identifier. For more information about cookies, and how
                        to disable cookies, visit
                        http://www.allaboutcookies.org.
                      </p>
                      <p className="text-base text-gray-500 mb-2">
                        “Log files” track actions occurring on the Site, and
                        collect data including your IP address, browser type,
                        Internet service provider, referring/exit pages, and
                        date/time stamps.
                      </p>
                      <p className="text-base text-gray-500 mb-2">
                        “Web beacons,” “tags,” and “pixels” are electronic files
                        used to record information about how you browse the
                        Site.
                      </p>
                      <p className="text-base text-gray-500 mb-2">
                        Additionally when you make a purchase or attempt to make
                        a purchase through the Site, we collect certain
                        information from you, including your name, billing
                        address, shipping address, payment information
                        (including credit card numbers and other payment modes),
                        email address, and phone number. We refer to this
                        information as “Order Information.”
                      </p>
                      <p className="text-base text-gray-500 mb-2">
                        When we talk about “Personal Information” in this
                        Privacy Policy, we are talking both about Device
                        Information and Order Information.
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
                          HOW DO WE USE YOUR PERSONAL INFORMATION?
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
                      <p className="text-base text-gray-500 mb-2">
                        We use the Order Information that we collect generally
                        to fulfill any orders placed through the Site (including
                        processing your payment information, arranging for
                        shipping, and providing you with invoices and/or order
                        confirmations). Additionally, we use this Order
                        Information to:
                      </p>
                      <p className="text-base text-gray-500 mb-2">
                        Communicate with you;
                      </p>
                      <p className="text-base text-gray-500 mb-2">
                        Screen our orders for potential risk or fraud; and
                      </p>
                      <p className="text-base text-gray-500 mb-2">
                        When in line with the preferences you have shared with
                        us, provide you with information or advertising relating
                        to our products or services.
                      </p>
                      <p className="text-base text-gray-500 mb-2">
                        We use the Device Information that we collect to help us
                        screen for potential risk and fraud (in particular, your
                        IP address), and more generally to improve and optimize
                        our Site (for example, by generating analytics about how
                        our customers browse and interact with the Site, and to
                        assess the success of our marketing and advertising
                        campaigns).
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
                          SHARING YOUR PERSONAL INFORMATION
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
                      <p className="text-base text-gray-500 mb-2">
                        We share your Personal Information with third parties to
                        help us use your Personal Information, as described
                        above. For example, We use Google Analytics to help us
                        understand how our customers use the Site--you can read
                        more about how Google uses your Personal Information
                        here: https://www.google.com/intl/en/policies/privacy/.
                        You can also opt-out of Google Analytics here:
                        https://tools.google.com/dlpage/gaoptout.
                      </p>
                      <p className="text-base text-gray-500">
                        Finally, we may also share your Personal Information to
                        comply with applicable laws and regulations, to respond
                        to a subpoena, search warrant or other lawful request
                        for information we receive, or to otherwise protect our
                        rights.
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
                          BEHAVIOURAL ADVERTISING
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
                      <p className="text-base text-gray-500 mb-2">
                        As described above, we use your Personal Information to
                        provide you with targeted advertisements or marketing
                        communications we believe may be of interest to you. For
                        more information about how targeted advertising works,
                        \you can visit the Network Advertising Initiative’s
                        (“NAI”) educational page at
                        http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
                      </p>
                      <p className="text-base text-gray-500 mb-2">
                        You can opt out of targeted advertising by:
                      </p>
                      <p className="text-base text-gray-500 mb-2">
                        <h2 className="mb-2">COMMON LINKS INCLUDE:</h2>
                        <p className="text-base text-gray-500 mb-2">
                          FACEBOOK - https://www.facebook.com/settings/?tab=ads
                        </p>
                        <p className="text-base text-gray-500 mb-2">
                          GOOGLE - https://www.google.com/settings/ads/anonymous
                        </p>
                        <p className="text-base text-gray-500 mb-2">
                          BING -
                          https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-
                        </p>
                      </p>
                      <p className="text-base text-gray-500">
                        Additionally, you can opt out of some of these services
                        by visiting the Digital Advertising Alliance’s opt-out
                        portal at: http://optout.aboutads.info/.
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
                          DO NOT TRACK
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
                        Please note that we do not alter our Site’s data
                        collection and use practices when we see a Do Not Track
                        signal from your browser.
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
                          YOUR RIGHTS
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
                      <p className="text-base text-gray-500 mb-2">
                        If you are a resident, you have the right to access
                        personal information we hold about you and to ask that
                        your personal information be corrected, updated, or
                        deleted. If you would like to exercise this right,
                        please contact us through the contact information below.
                      </p>
                      <p className="text-base text-gray-500">
                        Additionally, if you are a resident we note that we are
                        processing your information in order to fulfill
                        contracts we might have with you (for example if you
                        make an order through the Site), or otherwise to pursue
                        our legitimate business interests listed above.
                        Additionally, please note that your information will be
                        transferred outside of Europe, including to Canada and
                        the United States.
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
                          DATA RETENTION
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
                        When you place an order through the Site, we will
                        maintain your Order Information for our records unless
                        and until you ask us to delete this information.
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
                          MINORS
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
                        The Site is not intended for individuals under the age
                        of 18 years
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
                          CHANGES
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
                        We may update this privacy policy from time to time in
                        order to reflect, for example, changes to our practices
                        or for other operational, legal or regulatory reasons.
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

Privacy.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Privacy
