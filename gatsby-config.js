module.exports = {
  siteMetadata: {
    title: `Misión Arbol`,
    description: `Misión Árbol. MINEC. Gobierno Bolivariano de Venezuela`,
    author: `@mcljs15`,
    siteUrl: 'https://mision-arbol.netlify.app'
  },
flags: {
    DEV_SSR: false,
    FAST_DEV: true
  },

  plugins: [
    `gatsby-mdx`,
 `gatsby-remark-normalize-paths`,
    `gatsby-plugin-react-helmet`,
 {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-V34B09K0T7",
        head: true,
        anonymize: true,
      },
    },
   {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
 {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Forestale`,
        path: `${__dirname}/content/forestale`,
      },
    },
  {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
  
  {
      resolve: `gatsby-transformer-remark`,
      options: {    
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            },
          },
{
          resolve: `gatsby-remark-images-contentful`,
          options: {

            maxWidth: 960,
          },
        },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-lazy-load`,
        ],
      },
    },
{
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`],
      },
    },
{
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: "#29d",
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
'gatsby-plugin-preload-link-crossorigin',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
'gatsby-plugin-emotion',
    `gatsby-plugin-image`,
`gatsby-plugin-styled-components`,
   {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/lib/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
