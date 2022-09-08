import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const StyledLink = styled(NavLink)`
      text-decoration: none;
      width: 90%;
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      margin-block: 8px;
      
      & > li{
        width: 100%;
        align-self: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        list-style: none;
        padding: 15px;
        
      & > svg{
        color: white;
        font-size: 24px;
      }
      }
      
      &.${({activeClassName}) => activeClassName}{
        & > li{
          color: #ef5350;
          
        & > svg{
          color: #ef5350;
        }
        }
      }
`


export const HeaderWrapper = styled.div`
    width: 100vw;
    background-color: #000;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1000;
`

export const Container = styled.div`
    width: 90%;
    padding-block: 12px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    
    & > h2{
      color: white;
      font-weight: bolder;
    }
`

export const CartWrapper = styled.div`
    border: 2px solid rgba(255, 255, 255, 0.2);
    padding: 8px;
    border-radius: 8px;
    position: relative;
    
    & > div{
        position: absolute;
        bottom: -4px;
        left: -6px;
        color: white;
        background-color: #ef5350;
        border-radius: 50%;
        width: 22px;
        height: 22px;
        display: grid;
        place-items: center;
        font-weight: bold;
      }
      
      & > svg{
        color: white;
        font-size: 28px;
      }
`

export const Menus = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    z-index: 1000;
    color: white;
    top: 70px;
    background-color: #000;
    border: 2px solid rgba(0, 0, 0, 0.9);
    left: 0;
    padding-block: 25px;
    clip-path: ${({ open }) => {
      return !open ? 
       "polygon(0 0, 100% 0, 100% 0, 0 0)"
      : "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    }};
    transition: all 0.5s ease-in-out;
    }
`