const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: [
      // "jamobrand-medusa.s3.ap-south-1.amazonaws.com",
      // "jamob-medusa.s3.ap-south-1.amazonaws.com",
      // "medusa-public-images.s3.eu-west-1.amazonaws.com",
      "jamobrand-medusa.s3.ap-south-1.amazonaws.com",
      "localhost",
    ],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
