import styled from 'styled-components'

export const Container = styled.section`
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props=> props.bg});
  background-position: 0 100%;
  background-repeat: repeat-x;

  @media(max-width:1090px){
    flex-direction: column;
  }
`

export const MiddleBox = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;

  @media(max-width:1090px){
    order: -1;
    width: 100%;
    margin-bottom: 30px;
  }

  svg{
    width: 80px;
  }

  h1{
    font-size: 2em;
    border: none;
  }

  article{
    flex-direction: column;

    p{
      margin: 30px 0;
      background: #fff;
    }
    a{
      background: #fff;
      border: none;
    }
  }
`

export const Box = styled.article`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex: 1;
  padding: 0 10px;

  ul{
    margin: 0;
    li{
      background: #fff;
      padding: 20px;
      h3{
        font-size: 1rem;
        margin-bottom: 10px;
      }
      p{
        font-size: 0.777rem;
      }
    }
  }
`

export const Title = styled.h1`
  font-size: 3.5rem;
  text-transform: uppercase;
  margin: 0;
  padding-left: 10px;
  border-left: 15px solid #132554;
`

export const Content = styled.article`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  padding: 0 5%;

  p{
    margin: 0;
    width: 85%;
  }

  a{
    color: #132554;
    border: 1px solid #132554;
    width: 100px;
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
      content: "See More";
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