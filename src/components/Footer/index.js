import React from 'react'
import { Container, Box, Social } from './styles'
import { Link, useStaticQuery, graphql } from 'gatsby'

// import LogoIcon from '../SVG/logoIcon'
import {
  FaFacebook,
  FaWhatsapp,
  FaFacebookMessenger,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query{
      allContentfulProduct(limit:4){
        edges{
          node{
            name
          }
        }
      }
      allContentfulServices(limit:4){
        edges{
          node{
            name
          }
        }
      }
      contentfulAbout(slug: {eq: "story"}) {
        description {
          description
        }
      }
    }
  `)

  return(
    <>
    <Container className="section-xl grid">
      <Box>
        <h4><Link to="/about">Our Company</Link></h4>
        <p>{data.contentfulAbout.description.description}</p>
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
          {data.allContentfulServices.edges.map((edge)=>{
            return(
              <li>{edge.node.name}</li>
            )
          })}
          <li>
            <Link to="/services" className="all-button">See All</Link>
          </li>
        </ul>
      </Box>
      <Box>
        <h4>Information</h4>
        <ul>
          <li>
            <FaMapMarkerAlt fill={"#fff"}/> <span>121 Tanner St, Lowell, 01850</span>
          </li>
          <li>
            <FaPhone fill={"#fff"}/> <a href="tel:9789963203"><span>(978) 996-3203</span></a>
          </li>
        </ul>
      </Box>
    </Container>
    <Social className="grid">
      <p>
        2019 - All Rights Reserved. Developed by <a href="https://www.tribeweb.io" rel="noopener noreferrer" target="_blank"> Tribeweb.io</a>
      </p>
      <div>
        <a href="https://www.facebook.com/Lacerda-Masonry-Company-Inc-Masonry-and-Landscape-supplier-103756151010629/" aria-label="Check our Facebook Page" target="_blank" rel="noopener noreferrer"><FaFacebook  size={20} fill={"#fff"}/></a>
        <a href="https://m.me/103756151010629" aria-label="Send us a message on Facebook Messenger" target="_blank" rel="noopener noreferrer"><FaFacebookMessenger  size={20} fill={"#fff"}/></a>
        <a href="https://www.whatsapp.com/business/" aria-label="Get in touch with us on WhatsApp Business" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={20} fill={"#fff"}/></a>
      </div>
    </Social>
    </>
  )
}

export default Footer