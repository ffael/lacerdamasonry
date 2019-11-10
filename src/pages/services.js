import React from 'react'

import { Helmet } from 'react-helmet'

import Layout from '../layouts/pageLayout'
import { PageContext } from '../components/Context'
import Services from '../components/Services'

const ServicesPage = () =>{
  return(
    <PageContext.Provider value={{title:"Services", fileName:"services"}}>
      <Helmet title="Services" />
      <Layout>
        <Services />
      </Layout>
    </PageContext.Provider>
  )
}

export default ServicesPage