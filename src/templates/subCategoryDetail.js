import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Carousel from 'nuka-carousel'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import { Container, CloseButton, ContentWrapper, Content, ImageContainer } from './productStyle'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { MdClose } from 'react-icons/md'

export const query = graphql`
  query($slug: String!){
    contentfulAsset(file: {fileName: {eq: "missing.jpg"}}) {
      fixed {
        ...GatsbyContentfulFixed
      }
      fluid {
        ...GatsbyContentfulFluid
      }
    }
    contentfulProductsSubcategories(slug: {eq: $slug}) {
      name
      slug
      gallery {
        fixed (width: 500) {
          ...GatsbyContentfulFixed
        }
        fluid(maxWidth: 500){
          ...GatsbyContentfulFluid
        }
      }
      featuredImage {
        fixed (width: 500) {
          ...GatsbyContentfulFixed
        }
        fluid(maxWidth: 500){
          ...GatsbyContentfulFluid
        }
      }
      description {
        json
      }
    }
  }
`

const ProductDetail = (props) =>{
  const carouselSettings = {
    autoplay: true,
    width: "50%",
    pauseOnHover: false,
    swiping: true,
    withoutControls: false,
    wrapAround: true,
    slidesToShow: 1,
    transitionMode: "scroll",
  }

  function handleGallery(settings){
    return(
      <Carousel {...settings}>
        {props.data.contentfulProductsSubcategories.gallery.map((item)=>{
          return(
            <Img fixed={item.fixed} fluid={item.fluid} alt="" />
          )
        })}
      </Carousel>
    )
  }

  function handleFeaturedImage(){
    return(
      <ImageContainer>
        <Img 
          fixed={(props.data.contentfulProductsSubcategories.featuredImage) != null ? props.data.contentfulProductsSubcategories.featuredImage.fixed : props.data.contentfulAsset.fixed }  
          fluid={(props.data.contentfulProductsSubcategories.featuredImage) != null ? props.data.contentfulProductsSubcategories.featuredImage.fluid : props.data.contentfulAsset.fluid }
          alt=""/>
      </ImageContainer>
    )
  }

  return(
    <>
    <ModalRoutingContext.Consumer>
      {({closeTo}) => (
        <>
          <Helmet title="Detail" />
          <Container>
            <CloseButton>
              <Link to={closeTo}>
                <MdClose size={30} />
              </Link>
            </CloseButton>
            <ContentWrapper>
              {props.data.contentfulProductsSubcategories.gallery != null ? handleGallery(carouselSettings): handleFeaturedImage()}
              
              <Content>
                <h1>{props.data.contentfulProductsSubcategories.name}</h1>
                {documentToReactComponents(props.data.contentfulProductsSubcategories.description.json)}
                <a href="tel:+9789963203">Order Now</a>
              </Content>
            </ContentWrapper>
          </Container>
        </>
      )}
    </ModalRoutingContext.Consumer>
    </>
  )
}

export default ProductDetail