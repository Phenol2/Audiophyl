import styled from "styled-components"
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
    position: fixed;
    z-index: 11000;
    top: 0;
    left: 0;
    background-color: #e0e0e0;
`

export const Confirm = styled.div`
    width: 100vw;
    background-color: white;
    text-align: center;
    padding: 15px;
    
    & > h2{
      font-weight: light;
    }
    
    & > p{
      line-height: 28px;
      font-size: 15px;
      margin-block: 30px;
      padding-inline: 10px;
    }
`

export const StyledLink = styled(Link)`
    color: #ef5350;
    text-decoration: none;
    
`