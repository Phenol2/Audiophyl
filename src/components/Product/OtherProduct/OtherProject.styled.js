import styled from "styled-components"
import { NavLink } from "react-router-dom"


export const StyledLink = styled(NavLink)`
      background-color: #ef5350;
      letter-spacing: 1.2px;
      padding: 20px 35px;
      color: white;
      border: none;
      font-weight: bold;
      outline: none;
      margin-block: 80px;
      text-decoration: none;
`

export const StyledOther = styled.div`
    width: 100%;
    margin-block: 9rem 3rem;
    text-align: center;
    
    & > h1{
      margin-bottom: 1rem;
    }
`

export const EachProduct = styled.div`
    width: 100%;
    margin-block: 4rem;
    text-align: center;
    
    & > p{
      font-size: 18px;
      margin-block: 3.5rem;
      font-weight: bold;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 0.6rem;
    margin-block: 0.3rem;
`