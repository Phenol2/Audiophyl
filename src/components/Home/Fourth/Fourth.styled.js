import styled from "styled-components"
import { Link } from "react-router-dom"


export const StyledLink = styled(Link)`
        text-decoration: none;
        background-color: transparent;
        font-size: 13px;
        font-weight: 600;
        color: rgba(0, 0, 0, 1);
        text-align: center;
        padding: 20px 45px;
        border: 2px solid #000;
        letter-spacing: 1.5px;
      } 
`


export const FourthWrapper = styled.div`
    width: 100vw;
`


export const Container = styled.div`
    position: relative;
    width: 90%;
    margin: 80px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
`

export const Image = styled.img`
    width: 100%;
    object-fit: contain;
    border-radius: 8px;
`

export const ProductName = styled.div`
    position: absolute;
    left: 10%;
    top: 50%;
    transform: translate(-10%, -50%);
  

    & > div{
      color: #000;
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 40px;
    }
    
`