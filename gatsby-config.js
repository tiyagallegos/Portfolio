/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Tiya Gallegos", 
    author: "Tiya Gallegos",
    theGoat: "Tiya Gallegos",
    keywords: "web developer, software engineer, web designer"
  },
  plugins: [`gatsby-plugin-sass`, `gatsby-plugin-react-helmet-async`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data`,
      path: `${__dirname}/src/data/`
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `img`,
      path: `${__dirname}/src/img/`
    }
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`
]
}
