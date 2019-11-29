import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../layouts/pageLayout'
import { Container, Content, CardContainer, CardContent, Card, BreadCrumbs } from './styles'

import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { PageContext } from '../components/Context'

export const data = graphql`
    query($slug: String!){
      contentfulAsset(file: {fileName: {eq: "missing.jpg"}}) {
        fixed(width:230){
          ...GatsbyContentfulFixed
        }
      }
      allContentfulProductsSubcategories(filter: { parentCategory: { slug: {eq: $slug}}}){
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
  `

const ProductsPage = (props) =>{
  return(
    <PageContext.Provider value={{title:"Products", fileName:"products"}}>
      <Helmet title="Lacerda Masonry | Products" />
      <Layout>
      <BreadCrumbs>
        <Link to="/products">
          Back to Products
        </Link>
          <h3>
            {props.pageContext.name}
          </h3>
      </BreadCrumbs>
        <Container className="grid" featured={false}>
          <Content style={{marginBottom: "30%"}}>
            <CardContainer>
              {props.data.allContentfulProductsSubcategories.edges.map((edge)=>{
                return(
                  <Link to={`/products/${edge.node.slug}`} state={{
                    modal: true
                  }} key={edge.node.id}>
                    <Card>
                      <CardContent>
                        <Img fixed={(edge.node.featuredImage) != null ? edge.node.featuredImage.fixed : data.contentfulAsset.fixed } alt={edge.node.name}/>
                        <p>{edge.node.name}</p>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </CardContainer>
          </Content>
        </Container>
      </Layout>
    </PageContext.Provider>
  )
}

export default ProductsPage