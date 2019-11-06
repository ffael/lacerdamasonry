import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../layouts/pageLayout'
import Products from '../components/ProductsContent'

const ProductsPage = () =>{
  return(
    <>
    <Helmet title="Products" />
    <Layout>
      <Products />
    </Layout>
    </>
  )
}

export default ProductsPage