import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const Wrapper = styled.section`
    width: 100vw;
`

export const Container = styled.div`
    width: 90%;
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledLink = styled(NavLink)`
    width: 95%;
    text-align: center;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;
    border-radius: 8px;
    margin: 50px auto;
    padding-block: 35px;
    text-decoration: none;
    color: #000;
    
    
    & > h3{
      font-weight: bold;
      margin-block: 15px;
    }
    
    & > p{
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 65px;
      margin: 0 auto;
      
      & > span{
        color: rgba(0, 0, 0, 0.6);
      }
      
      & > svg{
        color: #ef5350;
        font-size: 18px;
      }
      
    }
`

export const Image = styled.img`
    width: 90px;
    height: 120px;
    object-fit: cover;
    margin-top: -95px;
`