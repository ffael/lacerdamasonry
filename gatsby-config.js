/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    about: "Lacerda Masonry Inc. started back in 2009, serving New England with realible and competent masonry services (walkways, pavers, retaining wall, foundation work...). In 2019, we decided to provide our clients with quality products along with our services."
  },

  plugins:[
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-modal-routing',
      options: {}
    },
    {
      resolve: 'gatsby-source-contentful',
      options:{
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `/src/assets/img/`
        }
    }
    },
   {
     resolve: 'gatsby-source-filesystem',
     options: {
       name: 'images',
       path: `${__dirname}/src/assets/img/`
     }
   },
   {
     resolve: 'gatsby-plugin-styled-components',
     options:{
       displayName: true
     }
   },
   {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      // Defines where to place the tracking script - `true` in the head and `false` in the body
      head: false,
      // Setting this parameter is optional
      anonymize: true,
      // Setting this parameter is also optional
      respectDNT: true,
      // Avoids sending pageview hits from custom paths
      exclude: ["/preview/**", "/do-not-track/me/too/"],
      // Delays sending pageview hits on route update (in milliseconds)
      pageTransitionDelay: 0,
      // // Enables Google Optimize using your container Id
      // optimizeId: "GTM-NLRSPV7",
      // // Enables Google Optimize Experiment ID
      // experimentId: "UA-114693120-2",
      // // Set Variation ID. 0 for original 1,2,3....
      // variationId: "UA-114693120-2",
      // Any additional optional fields
      sampleRate: 5,
      siteSpeedSampleRate: 10,
      cookieDomain: "lacerdamasonry.com",
    }
   },
   {resolve: `gatsby-plugin-manifest`,
   options: {
     name: "Lacerda Masonry",
     short_name: "Lacerda",
     start_url: "/",
     background_color: "#fff",
     theme_color: "#132554",
     // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
     // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
     display: "standalone",
     icon: "src/assets/img/favicon.png", // This path is relative to the root of the site.
     // An optional attribute which provides support for CORS check.
     // If you do not provide a crossOrigin option, it will skip CORS for manifest.
     // Any invalid keyword or empty string defaults to `anonymous`
     crossOrigin: `use-credentials`,
   },
  },
  ]
}
