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
    }
  `)
  return(
    <>
      <Container className="grid section-xl" bg={data.file.childImageSharp.fluid.src}>
        <Title>Our Story</Title>
        <Content>
          <p>Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.</p>

          <Link to="/" >See More</Link>
        </Content>
      </Container>
    </>
  )
}

export default Story