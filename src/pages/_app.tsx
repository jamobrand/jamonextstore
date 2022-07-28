import { MEDUSA_BACKEND_URL, queryClient } from "@lib/config"
import { AccountProvider } from "@lib/context/account-context"
import { CartDropdownProvider } from "@lib/context/cart-dropdown-context"
import { MobileMenuProvider } from "@lib/context/mobile-menu-context"
import { StoreProvider } from "@lib/context/store-context"
import { CartProvider, MedusaProvider } from "medusa-react"
import Script from "next/script"
import { Hydrate } from "react-query"
import "styles/globals.css"
import { AppPropsWithLayout } from "types/global"
import { useRouter } from "next/router"
import { GTM_ID, pageview } from "@lib/google/gtm"
// import { GA_TRACKING_ID } from "@lib/google/analytics"
import { useEffect, FC } from "react"
import * as gtag from "@lib/google/analytics"
import { NextWebVitalsMetric } from "next/app"
import Head from "next/head"

const Noop: FC = ({ children }) => <>{children}</>

function App({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutNoop = (Component as any).LayoutNoop || Noop
  const getLayout = Component.getLayout ?? ((page) => page)

  useEffect(() => {
    document.body.classList?.remove("loading")
  }, [])

  const router = useRouter()

  //GOOGLE TAG MANAGER
  useEffect(() => {
    const handleRouteChange = (url: string) => pageview(url)
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  //GOOGLE ANALYTICS 4
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <title>
          Jamobrand Home: Home Decor Products, Home & Kitchen & More
        </title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="android-chrome"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <link
          rel="android-chrome"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta
          name="google-site-verification"
          content="oFOXFPm8xWOnwe33kTUpF2YmvFbKt60UxoyzTRuRn4o"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      {/* Google Tag Manager - Global base code */}
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://jbclient.jamobrand.com/jbclient.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />

      <MedusaProvider
        baseUrl={MEDUSA_BACKEND_URL}
        queryClientProviderProps={{
          client: queryClient,
        }}
      >
        <Hydrate state={pageProps.dehydratedState}>
          <CartDropdownProvider>
            <MobileMenuProvider>
              <CartProvider>
                <StoreProvider>
                  <AccountProvider>
                    {getLayout(<Component {...pageProps} />)}
                  </AccountProvider>
                </StoreProvider>
              </CartProvider>
            </MobileMenuProvider>
          </CartDropdownProvider>
        </Hydrate>
      </MedusaProvider>
    </>
  )
}

export default App

export function reportGAVitals({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetric) {
  if (typeof window !== "undefined")
    window.gtag("event", name, {
      event_category:
        label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
      value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
      event_label: id, // id unique to current page load
      non_interaction: true, // avoids affecting bounce rate.
    } as Gtag.EventParams)
}
