import React from 'react'

import { Container, Content, CardContainer, CardContent, Card } from './styles'

import { Link, useStaticQuery, graphql } from 'gatsby'

const ProductsContent = () => {
  const data = useStaticQuery(graphql`
    query{
      allContentfulProduct(limit: 4){
        edges{ 
          node{
            slug
            name
            id
            featuredImage{
              file{
                url
              }
              fixed{
                src
              }
            }
          }
        }
      }
    }
  `)
  return(
    <>
      <Container className="grid">
        <Content>
          <CardContainer>
            {data.allContentfulProduct.edges.map((item)=>{
              return(
                <Link to={`/products/${item.node.slug}`} state={{
                  modal: true
                }} key={item.node.id}>
                  <Card>
                    <CardContent>
                      <img src={item.node.featuredImage.file.url} alt={item.node.name}/>
                      <p>{item.node.name}</p>
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