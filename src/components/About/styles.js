import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  justify-content: space-between;

  @media(max-width: 1000px){
    flex-direction: column;
  }
  @media(max-width: 400px){
    padding-top: 0;
  }
`

export const Card = styled.article`
  display: flex;
  width: 49%;
  flex-direction: column;
  padding: 20px;

  @media(max-width: 1000px){
    width: 100%;
    margin-bottom: 40px;
    
    ::after{
      content:"";
      padding: 20px 0;
      margin-bottom: 0;
      border-bottom: 1px solid #ECECEF;
    }
    :last-child::after{
      content:"";
      padding: 0;
      margin-bottom: 20px;
      border-bottom: none;
    }
  }

  h3{
    font-size: 2rem;
    margin-bottom: 20px;
  }
`

export const ProfileContainer = styled.article`
  padding-top: 0;
  padding-bottom: 50px;
  display: flex;

  article{
    width: 100%;
    padding: 0 20px;
    h3{
      margin-bottom: 5px;
    }
    strong{
      padding-left: 10px;
      border-left: 10px solid #00A3DD;
    }
    p{
      padding: 20px 0;
      font-style: italic;
    }
  }
  
  @media(max-width: 1000px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3{
      margin-top: 30px;
    }
  }
`