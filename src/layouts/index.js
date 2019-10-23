import React from 'react'
import GlobalStyles from '../styles/global'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Layout = ({children}) =>{
  return(
    <>
      <GlobalStyles />
      <Header />
      <Hero/>
      <main className="grid">
        {children}
      </main>
    </>
  )
}

export default Layout