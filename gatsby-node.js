const path = require('path')

module.exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions
  const productTemplate = path.resolve('./src/templates/productDetail.js')
  const subCategoryProductTemplate = path.resolve('./src/templates/subCategoryDetail.js')
  const subCategoryTemplate = path.resolve('./src/templates/subCategory.js')

  const response = await graphql(`
    query{
      allContentfulProduct{
        edges{
          node{
            slug
            name
          }
        }
      }
      allContentfulProductsSubcategories{
        edges{
          node{
            slug
            name
          }
        }
      }
    }
  `)
  response.data.allContentfulProductsSubcategories.edges.forEach((edge) =>{
    createPage({
      component: subCategoryProductTemplate,
      path: `/products/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
        name: edge.node.name
      }
    })
  })

  response.data.allContentfulProduct.edges.forEach((edge) =>{
    if(edge.node.slug.endsWith("pavers")){
      createPage({
        component: subCategoryTemplate,
        path: `/products/${edge.node.slug}`,
        context: {
          slug: edge.node.slug,
          name: edge.node.name
        }
      })
    }else{
      createPage({
        component: productTemplate,
        path: `/products/${edge.node.slug}`,
        context: {
          slug: edge.node.slug,
          name: edge.node.name
        }
      })
    }
  })
}