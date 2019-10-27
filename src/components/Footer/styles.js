import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  background: #132554;
  padding-bottom: 30px;

  p{
    color: #fff;
  }

  @media(max-width: 950px){
    flex-direction: column;
  }
`

export const Box = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 10px;
  margin: 0 20px;
  color: #fff;
  span{
    color:#fff;
  }
  ul{
    margin: 0;
  }
  li{
    color: #fff;
    font-size: 0.722rem;
    svg:first-child{
      margin-right: 10px;
    }
    .all-button{
      position: relative;
      overflow: hidden;

      ::after{
        content: "See All";
        display: flex;
        align-items: center;
        justify-content: center;
        top: -25px;
        left: 0;
        height: 80px;
        width: 100%;
        position: absolute;
        background: #fff;
        transform: translateY(100%);
        transition: all 0.3s ease 0s;
      }
    
    &:hover{
      transition: all 0.4s ease;
      padding: 0 50px;
      :after{
        color: #132554;
        transform: translateY(0);
      }
    }
    }
  }
  a{
    text-decoration: none;
    color: #fff;
    font-size: 0.722rem;
    padding-bottom: 2px;
    display: inline-block;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
    
    &:hover{
      border-bottom: 2px solid #fff;
      transition: all 0.3s ease;
    }
  }
  h4{
    a{
      font-size: 1.111rem;
    }
    margin-bottom: 15px;
  }
  p{
    font-size: 0.722rem;
  }

  @media(max-width: 950px){
    margin-bottom: 40px;
    :last-child{
      margin-bottom: 0;
    }
  }
`

export const Social = styled.article`
  display: flex;
  border-top: 1px solid #071029;
  padding-top: 40px;
  padding-bottom: 20px;
  flex-direction: column;
  background: #0d1b40;
  font-size: 0.722rem;
  color: #fff;
  align-items: center;
  justify-content: center;
  p{
    text-align: center;
    color: #fff;
    margin-bottom: 10px;
    a{
      color: inherit;
      text-decoration: none;
    }
  }
  div{
    border-top: 1px solid #fff;
    padding-top: 10px;
    width: 30%;
    display: flex;
    justify-content: space-around;
    flex: 1;
  }
`