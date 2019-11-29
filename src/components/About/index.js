import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Card, ProfileContainer } from './styles'

const About = () =>{

  const data = useStaticQuery(graphql`
    query{
      allContentfulAbout(limit: 2, sort: {fields: createdAt, order: ASC}){
        edges{
          node{
            title
            description{
              description
            }
          }
        }
      }
      contentfulAsset(title: {eq: "founder"}) {
        fixed(width: 300, height: 400, cropFocus: CENTER) {
          ...GatsbyContentfulFixed
        }
      }
    }
  `)

  return(
    <>
      <Container className="grid section-xl">
        {data.allContentfulAbout.edges.map((edge)=>{
          return(
            <Card>
              <h3>Our {edge.node.title}</h3>
              <p>{edge.node.description.description}</p>
            </Card>
          )
        })}
      </Container>
      <Container className="grid section">
        <ProfileContainer>
          <Img fixed={data.contentfulAsset.fixed} style={{maxWidth: 500}}/>
          <Card>
            <h3>Fabio Lacerda</h3>
            <strong>Founder & Owner</strong>
            <p>I believe good products and services can be provided for a reasonable and accessible price and we are proud to be able to offer that to our clients and friends.</p>
          </Card>
        </ProfileContainer>
      </Container>
    </>
  )
}

export default About