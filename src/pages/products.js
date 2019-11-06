import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../layouts/pageLayout'
import Products from '../components/ProductsContent'

import { PageContext } from '../components/Context'

const ProductsPage = () =>{

  return(
    <PageContext.Provider value={{title:"Products", fileName:"products"}}>
      <Helmet title="Products" />
      <Layout>
        <Products />
      </Layout>
    </PageContext.Provider>
  )
}

export default ProductsPage