const path = require('path')

module.exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions
  const productTemplate = path.resolve('./src/templates/productDetail.js')

  const response = await graphql(`
    query{
      allContentfulProduct{
        edges{
          node{
            slug
          }
        }
      }
    }
  `)

  response.data.allContentfulProduct.edges.forEach((edge) =>{
    createPage({
      component: productTemplate,
      path: `/products/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}