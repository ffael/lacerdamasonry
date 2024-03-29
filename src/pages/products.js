import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../layouts/pageLayout'
import Products from '../components/Products/productsPageContent'

import { PageContext } from '../components/Context'

const ProductsPage = () =>{

  return(
    <PageContext.Provider value={{title:"Products", fileName:"products"}}>
      <Helmet title="Lacerda Masonry | Products" />
      <Layout>
        <Products />
      </Layout>
    </PageContext.Provider>
  )
}

export default ProductsPage