import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 300px;
  background-image: url(${props=>props.bg});
  background-size: 100%;
  background-position-y: -300px;
  justify-content: center;
  
  @media(max-width:1090px){
    background-position-y: 0;
    background-size: 100%;
    background-repeat: no-repeat;
  }
`

export const Content = styled.article`
  @media(max-width:1090px){
    font-size: 12px;
  }
  display: flex;
  flex-direction: column;
  color: #fff;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 18px;

  h2{
    font-size: 4em;
    text-transform: uppercase;
    background: #00A3DD;
    padding: 20px;
  }

  p{
    color: inherit;
    font-size: 1em;
    line-height: 1.5em;
    margin-bottom: 2.5em;
    background: #132554;
    padding: 20px;
  }

  a{
    color: #00A3DD;
    position: relative;
    text-decoration: none;
    background: #fff;
    border-radius: 30px;
    padding: 10px 20px;
    font-size: 0.722rem;
    transition: all 0.4s ease;
    overflow: hidden;

    ::after{
      content: "${props=> props.text}";
      display: flex;
      align-items: center;
      justify-content: center;
      top: -17px;
      left: 0;
      height: 80px;
      width: 100%;
      position: absolute;
      background: #00A3DD;
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