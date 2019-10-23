import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  padding-bottom: 5%;
  position: relative;
  z-index: 1;
  top: -100px;
  margin-bottom: -100px;
`

export const Content = styled.div`
  flex-direction: column;
  width: 100%;
  align-items: center;
`
export const Title = styled.h1`
  color: #132554;
  font-size: 2rem;
  padding: 20px 0;
  margin-bottom: 50px;
  text-transform: uppercase;
  border-top: 2px solid #132554;
  border-bottom: 2px solid #132554;
`

export const CardContainer = styled.article`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1%;
  width: 100%;
  justify-items: center;
  a{
    text-decoration: none;
  }

  @media(max-width:1340px){
    grid-template-columns: repeat(3, 1fr);
    a:last-child{
      display: none;
    }
  }

  @media(max-width:1023px){
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 5%;
    a:last-child{
      display: block;
    }
  }
  
  @media(max-width:745px){
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

export const Card = styled.div`
  @media(max-width:745px){
    margin-bottom: 30px;
  }

  display: flex;
  /* padding: 20px; */
  max-width: 250px;
  height: 300px;
  background: #fff;
  border: 10px solid #fff;
  /* border-radius: 10px; */
  box-shadow: 0 2px 4px 1px rgba(0,0,0,0.1);
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;

  ::before{
    content: "";
    top: 100%;
    left: 0;
    height: 80px;
    width: 100%;
    position: absolute;
    background: #00A3DD;
    transition: all 0.3s ease;
  }
  
  &:hover{
    transform: translateY(-10px);
    transition: all 0.3s ease;
    /* border: 10px solid #CAD0DF; */

    p{
      color: #fff;
    }
    ::before{
      top:73%;
    }
  }
`
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    width: 100%;
    height: 100%;    
  }
  p{
    position: relative;
    font-weight: bold;
    margin-bottom: 0;
    bottom: 20px;
  }
`