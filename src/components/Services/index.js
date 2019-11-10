import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Container, Card, ImageContainer, Content } from './styles'

const Services = ()=>{

  const data = useStaticQuery(graphql`
    query{
      allContentfulServices {
        edges {
          node {
            description {
              description
            }
            name
            featuredImage {
              fixed(width: 450, height: 300) {
                ...GatsbyContentfulFixed
              }
            }
          }
        }
      }
    }
  `)

  return(
    <>
      <Container className="grid section-xl">
        {data.allContentfulServices.edges.map((edge) =>{
          return(
            <Card>
              <ImageContainer>
                <Img fixed={edge.node.featuredImage.fixed} style={{boxShadow: "0 2px 4px 1px rgba(0,0,0,0.1)"}}/>
              </ImageContainer>
              <Content>
                <h3>{edge.node.name}</h3>
                <p>{edge.node.description.description}</p>
              </Content>
            </Card>
          )
        })}
      </Container>
    </>
  )
}


export default Services