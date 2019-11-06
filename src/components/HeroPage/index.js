import React, { useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Container, Content } from './styles'
import { PageContext } from '../Context'

const Hero = () =>{
  const context = useContext(PageContext)
  let bg
  const data = useStaticQuery(graphql`
    query {
      allFile {
        edges {
          node {
            name
            childImageSharp {
              fluid(
              maxWidth: 2000) {
                src
              }
            }
          }
        }
      }
    }
  `)

  data.allFile.edges.map((edge)=>{
    if(edge.node.name === context.fileName ){
      return(
        bg = edge.node.childImageSharp.fluid.src
      )
    }
  })

  return(
    <>
      <Container bg={bg} className="grid">
        <Content>
          <h2>{context.title}</h2>
        </Content>
      </Container>
    </>
  )
}

export default Hero