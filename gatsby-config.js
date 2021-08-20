module.exports = {
  siteMetadata: {
    title: `Samuel Rivera C - Full stack web developer & designer`,
    description: `I'm a full stack web developer and designer, specialized in Wordpress, Node, React and Vue. I develop websites or apps for small and medium business and startups`,
    author: `@samuelriverac`,
    headline:`FULL STACK WEB DEVELOPER <br\> Samuel <br\> Rivera C`
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/portfolio/`,
        name: 'portfolio',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
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
        icon: `src/images/SRC-Logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `exo 2\:400,500,700,800,900`,
          `montserrat\:400,500,700,800,900:`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 768,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 768,
              linkImagesToOriginal: false,
              sizeByPixelDensity: true,
              showCaptions: true
            }
          },
        ]
      }
    },
  ],
}