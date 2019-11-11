import React from 'react'
import GlobalStyles from '../styles/global'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

import { Helmet } from 'react-helmet'

const Layout = ({children}) =>{
  return(
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Lacerda Masonry; Check us Out; Quality Products; Quality Masonry Services; Buy with Us; Best Price;"/>
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Lacerda Masonry" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Lacerda Masonry - Company's Website" />
        <meta property="og:url" content="http://www.lacerdamasonry.com" />
        <meta property="og:image" content="https://images.ctfassets.net/g58wkejwjnwk/7Jvfa70pWGb6mGQVujrNOV/d5c3926c17d9030bdf6f52c491afb00a/default.png" />
        <link rel="canonical" href="http://www.lacerdamasonry.com" />
      </Helmet>
      <GlobalStyles />
      <Header />
      <Hero/>
      <main className="grid">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout