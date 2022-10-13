import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: white;
    margin-block: 15px;
    display: block;
    
    &.${({activeclassname}) => activeclassname}{
      color: #ef5350;
    }
`

export const FooterWrapper = styled.div`
    position: relative;
    width: 100vw;
    background-color: #000;
    color: white;
    text-align: center;
    padding-block: 1px;
    
    &::after{
      content: "";
      height: 6px;
      width: 110px;
      background-color: #ef5350;
      position: absolute;
      top: 0px;
      left: 50%;
      transform: translateX(-50%);
    }
`


export const Container = styled.div`
    position: relative;
    width: 90%;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    & > p{
      font-weight: lighter;
      line-height: 28px;
      font-size: 15px;
      margin-block: 20px;
      color: rgba(255, 255, 255, 0.7);
    }
`

export const Menus = styled.ul`
    list-style: none;
    margin-top: 30px;
`

export const SocialIcon = styled.div`
    margin-block: 20px;
    display: flex;
    
    & > svg{
      font-size: 28px;
      margin-right: 15px;
    }
`