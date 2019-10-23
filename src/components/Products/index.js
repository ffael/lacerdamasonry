import React from 'react'

import { Container, Content, CardContainer, CardContent, Card } from './styles'

import { Link } from 'gatsby'

import paver from '../../assets/img/paver.jpg'
import mulch from '../../assets/img/mulch.jpg'
import cobblestone from '../../assets/img/cobblestone.jpg'
import retaining from '../../assets/img/retaining.jpg'

const Products = () => {
  return(
    <>
      <Container className="grid">
        <Content>
          <CardContainer>
            <Link to="/">
              <Card>
                <CardContent>
                  <img src={paver} alt=""/>
                  <p>Pavers</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/">
              <Card>
                <CardContent>
                  <img src={mulch} alt=""/>
                  <p>Mulch</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/">
              <Card>
                <CardContent>
                  <img src={retaining} alt=""/>
                  <p>Retaining Wall</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/">
              <Card>
                <CardContent>
                  <img src={cobblestone} alt=""/>
                  <p>Cobblestone</p>
                </CardContent>
              </Card>
            </Link>
          </CardContainer>
        </Content>
      </Container>
    </>
  )
}

export default Products