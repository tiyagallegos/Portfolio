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
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets/photography`,
        name: `photography`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets/heros`,
        name: `heros`
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("postcss-easy-import")(),
          require("postcss-custom-properties")({ preserve: false }),
          require("postcss-color-function")(),
          require("autoprefixer")({ browsers: ["last 2 versions"] })
        ]
      }
    },
    
    `gatsby-plugin-netlify`,`gatsby-plugin-sass`, `gatsby-plugin-react-helmet-async`,`gatsby-plugin-modal-routing`,
  `gatsby-transformer-sharp`, `gatsby-plugin-sharp`, `gatsby-plugin-offline`,`gatsby-plugin-smoothscroll`,

]
}
