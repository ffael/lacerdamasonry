import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const ContentWrapper = styled.article`
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  @media(max-width: 1000px){
    align-items: center;
    flex-direction: column;
  }
`

export const ImageContainer = styled.picture`
  max-width: 50%;
`
export const Content = styled.div`
  display: flex;
  width: 45%;
  padding-bottom: 30px;
  flex-direction: column;

  p{
    overflow: scroll;
    scroll-behavior:smooth;
    max-height: 300px;
  }
  
  @media(max-width: 1000px){
    width: 100%;
  }

  a{
    color: #132554;
    border: 1px solid #132554;
    height: 50px;
    position: relative;
    text-decoration: none;
    background: #fff;
    border-radius: 30px;
    padding: 10px 20px;
    font-size: 0.722rem;
    transition: all 0.4s ease;
    overflow: hidden;
    text-align: center;

    ::after{
      content: "Order Now";
      display: flex;
      align-items: center;
      justify-content: center;
      top: -17px;
      left: 0;
      height: 80px;
      width: 100%;
      position: absolute;
      background: #132554;
      transform: translateY(100%);
      transition: all 0.3s ease 0s;
    }
    
    &:hover{
      transition: transform 0.4s ease;
      :after{
        color: #fff;
        transform: translateY(0);
      }
    }
  }
`

export const CloseButton = styled.button`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  background: none;
  border: none;
  margin-bottom: 20px;
  padding: 0;
  transition: all 0.3s ease;

  a{
    transition: all 0.3s ease;
    transform: rotate(0);
    transform-origin: 15px 15px;
  }

  a:hover{
    transition: all 0.3s ease;
    transform: rotate(180deg);
    transform-origin: 15px 15px;
  }
`