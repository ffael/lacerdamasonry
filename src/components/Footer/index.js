import React from 'react'
import { Container, Box, Social } from './styles'
import { Link, useStaticQuery, graphql } from 'gatsby'

// import LogoIcon from '../SVG/logoIcon'
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
      allContentfulProduct(limit:4){
        edges{
          node{
            name
          }
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
          {data.allContentfulProduct.edges.map((edge)=>{
            return(
              <li>{edge.node.name}</li>
            )
          })}
          <li>
            <Link to="/products" className="all-button">See All</Link>
          </li>
        </ul>
      </Box>
      <Box>
        <h4><Link to="/services">Services</Link></h4>
        <ul>
          <li>
            Brick Stairs
          </li>
          <li>
            Patios & Walkways
          </li>
          <li>
            Stone
          </li>
          <li>
            Driveways
          </li>
          <li>
            <Link to="/services" className="all-button">See All</Link>
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
        <a href="https://www.facebook.com/Lacerda-Masonry-Company-Inc-Masonry-and-Landscape-supplier-103756151010629/" target="_blank" rel="noopener noreferrer"><FaFacebook  size={20} fill={"#fff"}/></a>
        <a href="https://m.me/103756151010629" target="_blank" rel="noopener noreferrer"><FaFacebookMessenger  size={20} fill={"#fff"}/></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} fill={"#fff"}/></a>
        <a href="https://www.yelp.com/" target="_blank" rel="noopener noreferrer"><FaYelp size={20} fill={"#fff"}/></a>
        <a href="https://www.whatsapp.com/business/" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={20} fill={"#fff"}/></a>
      </div>
    </Social>
    </>
  )
}

export default Footer