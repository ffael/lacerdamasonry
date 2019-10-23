import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
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