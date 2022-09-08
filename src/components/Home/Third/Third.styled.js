import styled from "styled-components"
import { Link } from "react-router-dom"

export const StyledLink = styled(Link)`
        text-decoration: none;
        background-color: #000;
        font-size: 13px;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.9);
        text-align: center;
        padding: 20px 45px;
        border: none;
        letter-spacing: 1.5px;
      } 
`

export const ThirdWrapper = styled.div`
    width: 100vw;
  
`

export const Container = styled.div`
    width: 90%;
    margin: 80px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ff5252;
    border-radius: 8px;
    padding: 60px 20px;
    color: white;
    text-align: center;
    
    & > p{
      font-size: 45px;
      line-height: 56px;
      font-weight: 600;
    }
    
    & > div{
        margin-block: 30px;
        font-size: 16px;
        line-height: 27px;
      }
    
`

export const Image = styled.img`
    width: 180px;
    margin-block: -20px 50px;
    object-fit: cover;
`