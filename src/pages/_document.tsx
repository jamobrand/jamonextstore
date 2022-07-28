import { MEDUSA_BACKEND_URL } from "@lib/config"
// import { GA_TRACKING_ID } from "@lib/google/analytics"
import { GTM_ID } from "@lib/google/gtm"
import Document, { Head, Html, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    const uri = process.env.NEXT_PUBLIC_VERCEL_URL || "https://jamobrand.com"
    const { hostname } = new URL(uri)

    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content="https://jamobrand.com" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Jamobrand" />
          <meta
            name="description"
            content="Browse home decor products from wallpapers, decor items and accents, kitchenware and kitchen items, organization and storage products & more from Jamobrand Home"
          />
          <meta name="mobile-web-app-capable" content="yes" />
          <link
            rel="preconnect"
            href="https://jamobrand.com"
            crossOrigin="true"
          />
          <link rel="dns-prefetch" href="https://jamobrand.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#634096" />
          <script
            async
            src={`https://jbclient.jamobrand.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
            }}
          />
        </Head>
        <body>
          <noscript>
            <iframe
              src={`https://jbclient.jamobrand.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
