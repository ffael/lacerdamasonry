import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Container, Content } from './styles'

const Hero = () =>{
  const data = useStaticQuery(graphql`
    query{
      file(name: {eq: "products"}) {
        childImageSharp{
            fluid(
              maxWidth: 2000){
                src
            }
          }
        }
    }
  `)
  return(
    <>
      <Container bg={data.file.childImageSharp.fluid.src} className="grid">
        <Content text="See Our Entire Catalog">
          <h2>Products</h2>
        </Content>
      </Container>
    </>
  )
}

export default Hero