import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  padding-bottom: 10%;
`

export const Content = styled.div`
  flex-direction: column;
  width: 100%;
  align-items: center;
`
export const CardContainer = styled.article`
  display: grid;
  grid-template-rows: minmax(1fr, auto);
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  grid-auto-columns: 1fr;
  grid-column-gap: 1%;
  grid-row-gap: 5%;
  width: 100%;
  justify-items: center;
  /* overflow-y: hidden; */
  a{
    text-decoration: none;
  }

  @media(max-width:1340px){
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    grid-auto-columns: 1fr;
  }

  @media(max-width:1023px){
    grid-auto-rows: 1fr;
    grid-auto-columns: 1fr;
    grid-row-gap: 5%;
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