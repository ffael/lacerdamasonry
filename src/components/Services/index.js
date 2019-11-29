import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Container, Card, ImageContainer, Content } from './styles'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Services = ()=>{

  const data = useStaticQuery(graphql`
    query{
      contentfulAsset(file: {fileName: {eq: "missing.jpg"}}) {
        fixed(width: 400, resizingBehavior: SCALE, cropFocus: CENTER) {
          ...GatsbyContentfulFixed
        }
        fluid{
          ...GatsbyContentfulFluid
        }
      }
      allContentfulServices {
        edges {
          node {
            description {
              json
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
                <Img fixed={(edge.node.featuredImage) != null ? edge.node.featuredImage.fixed : data.contentfulAsset.fixed} style={{boxShadow: "0 2px 4px 1px rgba(0,0,0,0.1)"}}/>
              </ImageContainer>
              <Content>
                <h3>{edge.node.name}</h3>
                {documentToReactComponents(edge.node.description.json)}
              </Content>
            </Card>
          )
        })}
      </Container>
    </>
  )
}


export default Services