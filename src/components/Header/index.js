import React from 'react'
import { Link } from 'gatsby'

import { Container, MainNav, Logo } from './styles'
import LogoIcon from '../SVG/logoIcon'

const Header = () =>{
  return(
    <Container className="grid">
      <Logo className="logo"><LogoIcon className="logoIcon"/>Lacerda Masonry</Logo>
      <MainNav>
        <ul>
          <li><Link to="/" activeClassName="activePage">Home</Link></li>
          <li><Link to="/products" activeClassName="activePage">Products</Link></li>
          <li><Link to="/services" activeClassName="activePage">Services</Link></li>
          <li><Link to="/about" activeClassName="activePage">About</Link></li>
        </ul>
      </MainNav>
    </Container>
  )
}

export default Header