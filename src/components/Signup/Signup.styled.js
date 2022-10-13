import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const StyledLink = styled(NavLink)`
    color: #ef5350;
`


export const Wrapper = styled.form`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-block: 50px;
    background-color: #eee;
    padding-block: 50px;
    
    & > h2{
      text-align: center;
      color: #ef5350;
    }
`

export const FormWrapper = styled.form`
    width: 90%;
    padding-block: 15px;
    margin-block: 20px;
    
    & > button{
      width: 100%;
      text-align: center;
      color: white;
      letter-spacing: 0.5px;
      background-color: #ef5350;
      padding-block: 15px;
      outline: none;
      border: none;
      border-radius: 8px;
      margin-block: 20px;
      font-size: 18px;
      font-weight: bold;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;
    }
    
    & > p{
      text-align: center;
      font-size: 15px;
      margin-block: 15px;
    }
`

