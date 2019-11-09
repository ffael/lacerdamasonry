import React from 'react'

import { Container, Content, CardContainer, CardContent, Card } from './styles'

import { useStaticQuery, graphql, Link } from 'gatsby'

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
              file {
                url
              }
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
                    <img src={`${edge.node.featuredImage.file.url}`} alt=""/>
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