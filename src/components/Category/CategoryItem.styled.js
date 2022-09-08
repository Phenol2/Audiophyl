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

export const CategoryItemWrapper = styled.div`
    width: 90%;
    margin: 120px auto;
    text-align: center;
    
    & > h4{
      color: #ef5350;
      margin-block: 25px;
      font-weight: 500;
      font-size: 20px;
    }
  
    & > h3{
      font-size: 30px;
      margin-block: 2px;
    }
    
    & > p{
      line-height: 28px;
      margin-block: 15px 20px;
      color: rgba(0, 0, 0, 0.6);
      padding-block: 30px;
    }
`

export const ImageWrapper = styled.img`
    width: 100%;
    border-radius: 8px;
    height: 220px;
    object-fit: cover;
    margin-block: 30px;
    
`