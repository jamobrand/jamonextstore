const excludedPaths = ["/checkout", "/account/*"]

const siteUrl = "https://jamobrand.com"

module.exports = {
  // siteUrl: process.env.NEXT_PUBLIC_VERCEL_URL,
  siteUrl,
  generateRobotsTxt: true,
  exclude: excludedPaths + ["/[sitemap]"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: excludedPaths,
      },
    ],
  },
}
