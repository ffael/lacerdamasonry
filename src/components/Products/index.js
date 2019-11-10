import React from 'react'

import { Container, Content, CardContainer, CardContent, Card } from './styles'

import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

const Products = () => {

  const data = useStaticQuery(graphql`
    query{
      allContentfulProduct(limit: 4, filter: {homePageFeatured: {eq: true}}) {
        edges {
          node {
            name
            id
            slug
            homePageFeatured
            description {
              description
            }
            featuredImage {
              fixed(width: 230){
                ...GatsbyContentfulFixed
              }
              title
            }
          }
        }
      }
    }
  `)
  return(
    <>
      <Container className="grid" featured={true}>
        <Content>
          <CardContainer>
          {data.allContentfulProduct.edges.map((edge)=> {
            return(
              <Link to={`/products/${edge.node.slug}`} key={edge.node.id} state={{
                modal: true
              }}>
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

export default Products