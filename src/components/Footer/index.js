import React from 'react'
import { Container, Box, Social } from './styles'
import { Link, useStaticQuery, graphql } from 'gatsby'

import LogoIcon from '../SVG/logoIcon'
import {
  FaFacebook,
  FaInstagram,
  FaYelp,
  FaWhatsapp,
  FaFacebookMessenger,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelopeOpenText
} from 'react-icons/fa'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query{
      site {
        siteMetadata {
          about
        }
      }
    }
  `)

  return(
    <>
    <Container className="section-xl grid">
      <Box>
        <h4><Link to="/about">Our Company</Link></h4>
        <p>{data.site.siteMetadata.about}</p>
      </Box>
      <Box>
        <h4><Link to="/products">Products</Link></h4>
        <ul>
          <li>
            <Link to="/">Mulch</Link>
          </li>
          <li>
            <Link to="/">Pavers</Link>
          </li>
          <li>
            <Link to="/">Sand</Link>
          </li>
          <li>
            <Link to="/">Bricks</Link>
          </li>
          <li>
            <Link to="/" className="all-button">See All</Link>
          </li>
        </ul>
      </Box>
      <Box>
        <h4><Link to="/services">Services</Link></h4>
        <ul>
          <li>
            <Link to="/">Brick Stairs</Link>
          </li>
          <li>
            <Link to="/">Patios & Walkways</Link>
          </li>
          <li>
            <Link to="/">Stone</Link>
          </li>
          <li>
            <Link to="/">Driveways</Link>
          </li>
          <li>
            <Link to="/" className="all-button">See All</Link>
          </li>
        </ul>
      </Box>
      <Box>
        <h4>Information</h4>
        <ul>
          <li>
            <FaMapMarkerAlt fill={"#fff"}/> <span>24 Beaulieu Street, Lowell, 01850</span>
          </li>
          <li>
            <FaPhone fill={"#fff"}/> <a href="tel:9785965350"><span>(978)596-5350</span></a>
          </li>
          <li>
            <FaEnvelopeOpenText fill={"#fff"}/> <a href="mailto:contact@lacerdamasonry.com"><span>contact@lacerdamasonry.com</span></a>
          </li>
        </ul>
      </Box>
    </Container>
    <Social className="grid">
      <p>
        2019 - All Rights Reserved. Developed by <a href="https://www.tribeweb.io" rel="noopener noreferrer" target="_blank"> Tribeweb.io</a>
      </p>
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook  size={20} fill={"#fff"}/></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookMessenger  size={20} fill={"#fff"}/></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} fill={"#fff"}/></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaYelp size={20} fill={"#fff"}/></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={20} fill={"#fff"}/></a>
      </div>
    </Social>
    </>
  )
}

export default Footer