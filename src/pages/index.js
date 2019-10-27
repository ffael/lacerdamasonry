import React from "react"
import { Helmet } from 'react-helmet'
import Layout from '../layouts'
import Products from '../components/Products'
import Story from '../components/Story'
import Reason from '../components/Reason'

export default () => {
  return(
    <>
    <Helmet title="Home"/>
    <Layout>
      <Products/>
      <Story />
      <Reason />
    </Layout>
    <form name="contact" method="POST" data-netlify="true">
      <label htmlFor="name">
        Name:
        <input type="text" name="name"/>
      </label>
      <label htmlFor="lastName">
        Last Name:
        <input type="text" name="lastName"/>
      </label>
      <button type="submit">Submit</button>
    </form>
    </>
  )
} 
