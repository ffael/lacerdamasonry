import React from "react"
import { Helmet } from 'react-helmet'
import Layout from '../layouts'
import Products from '../components/Products'
import Story from '../components/Story'

export default () => {
  return(
    <>
    <Helmet title="Home"/>
    <Layout>
      <Products/>
      <Story />
    </Layout>
    </>
  )
} 
