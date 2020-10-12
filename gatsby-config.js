/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = {
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      createProxyMiddleware({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },

  siteMetadata: {
    title: "Tiya Gallegos", 
    author: "Tiya Gallegos",
    theGoat: "Tiya Gallegos",
    keywords: "web developer, software engineer, web designer"
  },
  plugins: [`gatsby-plugin-netlify`,`gatsby-plugin-sass`, `gatsby-plugin-react-helmet-async`,`gatsby-plugin-modal-routing`,
  `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
]
}
