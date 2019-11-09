import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  padding-bottom: 5%;
  position: relative;
  z-index: 1;

  padding-top: ${props => props.featured ? 0 : "4.875rem"};
  padding-bottom: ${props => props.featured ? "50px" : "4.875rem"};

  @media(max-width: 350px){
    padding-top: 0;
  }

  top: ${props => props.featured ? "-100px": 0};
  margin-bottom: ${props => props.featured ? "-100px": 0};

  @media(max-width:1090px){
    top: ${props => props.featured ? "-30px": 0};
    margin-bottom: ${props => props.featured ? "-30px": 0};
  }
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
  grid-column-gap: 5%;
  grid-row-gap: 5%;
  width: 100%;
  justify-items: center;
  
  a{
    text-decoration: none;
  }

  @media(max-width:1340px){
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 5%;
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
  
  @media(max-width:700px){
    display: flex;
    align-items: center;
    flex-direction: column;
    
    a{
      display: flex;
      width: 100%;
    }
  }
`

export const Card = styled.div`
  display: flex;
  max-width: 250px;
  height: 300px;
  background: #fff;
  border: 10px solid #fff;
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

    p{
      color: #fff;
    }
    ::before{
      top:78%;
    }
  }
  @media(min-width: 350px) and (max-width:700px){
    width: 100%;
  }

  @media(max-width:701px){
    margin-bottom: 30px;
    max-width: 100%;
    padding: 0 10px;

    ::before{
      content: "";
    }
  
    &:hover{
      transition: all 0.3s ease;

      p{
        color: #00A3DD;
      }
      ::before{
        top:98%;
      }
    }
  }

  @media(max-width: 350px){
    height: 100%;
  }
`
export const CardContent = styled.div`
  @media(min-width: 350px) and (max-width:700px){
    justify-content: space-around;
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: space-between;

  img{
    width: 100%;
    max-width: 250px;
    height: 100%;
    margin: 0;  
  }
  p{
    position: relative;
    font-weight: bold;
    margin-bottom: 0;
    bottom: 20px;
  }
  @media(max-width: 350px){
    flex-direction: column;
    max-height: 200px;
    width: 100%;
    justify-content: space-between;

    p{
      padding: 20px;
      text-align: right;
    }

    img{
      max-width: 150px !important;
      max-height: 150px !important;
      margin: 0;  
    } 
  }
`