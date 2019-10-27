import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import LogoIcon from '../SVG/logoIcon'
import {
  MdThumbUp,
  MdVerifiedUser,
  MdPeople,
  MdAttachMoney
} from 'react-icons/md'

// Styled Components
import { Container, Title, Content, Box, MiddleBox } from './styles'


const Reason = () =>{
  const data = useStaticQuery(graphql`
    query{
      file(name: {eq: "leaves"}) {
        childImageSharp{
            fluid{
                src
            }
          }
        }
    }
  `)
  return(
    <>
      <Container className="grid section-xl" bg={data.file.childImageSharp.fluid.src}>
        <Box>
          <ul>
            <li>
              <MdThumbUp size={40} fill={"#00A3DD"} />
              <h3>Years of Experience</h3>
              <p>Lacerda Masonry has been around for 10 years, serving all around New England.</p>
            </li>
            <li>
              <MdVerifiedUser size={40} fill={"#00A3DD"}/>
              <h3>Quality Guaranteed</h3>
              <p>All our products and services have been approved by our customer over the years.</p>
            </li>
          </ul>
        </Box>

        <MiddleBox>
          <LogoIcon />
          <Title>Why Choose Lacerda</Title>
          <Content>
            <p>Some reasons why to choose our services and products.</p>
            {/* <Link to="/" >See More</Link> */}
          </Content>
        </MiddleBox>
          
        <Box>
          <ul>
            <li>
              <MdPeople size={40} fill={"#00A3DD"} />
              <h3>Great Custumer Service</h3>
              <p>We make sure to deliver the best customer support. Our representatives are always prompt to help.</p>
            </li>
            <li>
              <MdAttachMoney size={40} fill={"#00A3DD"} />
              <h3>Best Prices</h3>
              <p>Best quality in products and services for the best price out there.</p>
            </li>
          </ul>
        </Box>
      </Container>
    </>
  )
}

export default Reason