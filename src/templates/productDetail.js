import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Carousel from 'nuka-carousel'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import { Container, CloseButton, ContentWrapper, Content, ImageContainer } from './productStyle'

import { MdClose } from 'react-icons/md'

export const query = graphql`
  query($slug: String!){
    contentfulProduct(slug: {eq: $slug}) {
      name
      slug
      gallery {
        fixed (width: 300) {
          ...GatsbyContentfulFixed
        }
        fluid(maxWidth: 300){
          ...GatsbyContentfulFluid
        }
      }
      featuredImage {
        fixed (width: 300) {
          ...GatsbyContentfulFixed
        }
        fluid(maxWidth: 200){
          ...GatsbyContentfulFluid
        }
      }
      description {
        description
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
        {props.data.contentfulProduct.gallery.map((item)=>{
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
        <Img fixed={props.data.contentfulProduct.featuredImage.fixed} fluid={props.data.contentfulProduct.featuredImage.fluid} alt=""/>
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
              {props.data.contentfulProduct.gallery != null ? handleGallery(carouselSettings): handleFeaturedImage()}
              
              <Content>
                <h1>{props.data.contentfulProduct.name}</h1>
                <p dangerouslySetInnerHTML={{__html:props.data.contentfulProduct.description.description}}></p>
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