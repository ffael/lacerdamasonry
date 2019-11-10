import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  @media(max-width: 700px){
    padding-top: 0;
  }
`

export const Card = styled.article`
  display: flex;
  margin: 20px 0;
  /* border: 1px solid #00A3DD; */
  padding: 40px;
  position: relative;
  left: 30;

  :nth-child(even){
    background: #fafafa;
  }

  @media(max-width: 1090px){
    flex-direction: column;
    align-items: center;
  }
`

export const ImageContainer = styled.div`
  width: 50%;
  max-width: 400px;
  overflow: hidden;

  position: relative;
  left: -80px;

  @media(max-width: 1090px){
    width: 100%;
    
    left: 0;
  }
`

export const Content = styled.div`
  width: 50%;
  margin-left: -20px;
  color: #132554;
  padding: 40px;

  h3{
    font-size: 1.666rem;
  }
  
  @media(max-width: 1090px){
    width: 100%;
    }
`