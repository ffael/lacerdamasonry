import React from 'react'

import { Helmet } from 'react-helmet'

import Layout from '../layouts/pageLayout'
import { PageContext } from '../components/Context'

const AboutPage = () =>{
  return(
    <PageContext.Provider value={{title:"About", fileName:"about"}}>
      <Helmet title="About" />
      <Layout>
        About
      </Layout>
    </PageContext.Provider>
  )
}

export default AboutPage