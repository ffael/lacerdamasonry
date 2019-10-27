/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    about: "We started our company back in 2009, serving New England with realible and competent masonry services (walkways, pavers, retaining wall, foundation work...). In 2019, we decided to provide our clients with quality products along with our services."
  },

  plugins:[
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-background-image'
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
   }
  ]
}
