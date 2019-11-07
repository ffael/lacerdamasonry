import React, { useState } from 'react'
import { Link } from 'gatsby'

import { Container, MainNav, Logo, MobileContainer, MobileNav } from './styles'
import LogoIcon from '../SVG/logoIcon'

import {
  MdFilterList
} from 'react-icons/md'

const Header = () =>{

  const [open, setOpen] = useState(false)

  return(
    <>
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
      <MobileContainer>
        <div onClick={()=> {setOpen(!open)}}>
          <MdFilterList size={30} fill={ open ? "#00A3DD":"#fff"} />
        </div>
          <MobileNav open={open}>
            <ul>
              <li><Link to="/" activeClassName="activePage">Home</Link></li>
              <li><Link to="/products" activeClassName="activePage">Products</Link></li>
              <li><Link to="/services" activeClassName="activePage">Services</Link></li>
              <li><Link to="/about" activeClassName="activePage">About</Link></li>
            </ul>
          </MobileNav>
      </MobileContainer>
    </>
  )
}

export default Header