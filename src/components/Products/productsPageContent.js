import React from 'react'

import { Container, Content, CardContainer, CardContent, Card } from '../Products/styles'

import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ProductsContent = () => {
  const data = useStaticQuery(graphql`
    query{
      allContentfulProduct{
        edges{ 
          node{
            slug
            name
            id
            featuredImage {
              fixed(width: 230){
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
      <Container className="grid" featured={false}>
        <Content style={{marginBottom: "30%"}}>
          <CardContainer>
            {data.allContentfulProduct.edges.map((edge)=>{
              return(
                <Link to={`/products/${edge.node.slug}`} state={{
                  modal: true
                }} key={edge.node.id}>
                  <Card>
                    <CardContent>
                      <Img fixed={edge.node.featuredImage.fixed} alt={edge.node.name}/>
                      <p>{edge.node.name}</p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </CardContainer>
        </Content>
      </Container>
    </>
  )
}

export default ProductsContent