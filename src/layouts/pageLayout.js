import React from 'react'
import GlobalStyles from '../styles/global'
import Header from '../components/Header'
import Hero from '../components/HeroPage'
import Footer from '../components/Footer'

const Layout = ({children}) =>{
  return(
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <main className="grid">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout