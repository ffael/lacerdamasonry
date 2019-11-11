import React from "react"
import { Helmet } from 'react-helmet'
import Layout from '../layouts'
import Products from '../components/Products'
import Story from '../components/Story'
import Reason from '../components/Reason'

export default () => {
  return(
    <>
    <Helmet title="Lacerda Masonry | Home"/>
    <Layout>
      <Products/>
      <Story />
      <Reason />
    </Layout>
    </>
  )
} 
