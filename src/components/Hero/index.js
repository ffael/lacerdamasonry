import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { Container, Content } from './styles'

const Hero = () =>{
  const data = useStaticQuery(graphql`
    query{
      file(name: {eq: "background"}) {
        childImageSharp{
            fluid(
              maxWidth: 2000,
              toFormat: WEBP){
                src
            }
          }
        }
    }
  `)
  return(
    <>
      <Container bg={data.file.childImageSharp.fluid.src} >
        <Content className="content" text="See Our Entire Catalog">
          <h2>Landscape Supplies & Materials</h2>
          <p>We count with a extense variaty of high quality supplies and materials for your project. </p>
          <Link to="/" className="button--main">See Our Entire Catalog</Link>
        </Content>
      </Container>
    </>
  )
}

export default Hero