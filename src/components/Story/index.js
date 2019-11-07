import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'

// Styled Components
import { Container, Title, Content } from './styles'


const Story = () =>{
  const data = useStaticQuery(graphql`
    query{
      file(name: {eq: "background"}) {
        childImageSharp{
          fluid(
            maxWidth: 2000,
            toFormat: WEBP){
              src
          }
        }
      }
      contentfulAbout {
        companyStory {
          companyStory
        }
      }
    }
  `)
  return(
    <>
      <Container className="grid section-xl" bg={data.file.childImageSharp.fluid.src}>
        <Title>Our Story</Title>
        <Content>
          <p>{data.contentfulAbout.companyStory.companyStory}</p>
          <Link to="/about" >See More</Link>
        </Content>
      </Container>
    </>
  )
}

export default Story