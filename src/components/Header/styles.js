import styled from 'styled-components'

export const Container = styled.header`
  user-select: none;
  @media(max-width:1023px){
    justify-content: center;
  }
  display: flex;
  background: #f9f9f9;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: space-between;
`

export const Logo = styled.h1`
  display: flex;
  cursor: default;
  align-content: center;
  line-height: 66px;
  font-size: 1.8rem;
  margin: 0;
  color: #132554;

  svg{
    margin-right: 10px;
  }
`

export const MainNav = styled.nav`
  @media(max-width:1023px){
    display:none;
  }
  .activePage{
    color: #00A3DD;
    ::after{
      transform: translateX(0);
      opacity: 1;
    }
  }
  width: 400px;
  height: 60px;
  ul{
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    margin: 0;
    padding: 0;
    justify-content: space-between;

    li{
      margin-bottom: 0;
      height: inherit;
  
      a{
        align-items: center;
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #132554;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.722rem;
        transition: all 0.3s ease;
        
        ::after{
          content: "";
          top: 80%;
          height: 2px;
          width: 100%;
          position: absolute;
          background: #00A3DD;
          opacity:0;
          transform: translateY(10px);
          transition: opacity 0.3s ease 0s, transform 0.3s ease 0s;
        }

        &:hover{
          transition: all 0.3s ease;
          color: #00A3DD;

          ::after{
            transform: translateX(0);
            opacity: 1;
          }
        }
      }
    }
  }
`