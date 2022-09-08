import styled from "styled-components"
import { Link } from "react-router-dom"

export const CheckoutWrapper = styled.form`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e0e0e0;
    padding-block: 15px;
      
`

export const Container = styled.div`
    width: 100%;
    margin-block: 100px;
    background-color: white;
    padding-block: 10px;
`

export const StyledLink = styled(Link)`
      background-color: #fff;
      display: flex;
      width: 50%;
      align-items: center;
      justify-content: center;
      padding:  15px 10px;
      text-align: center;
      color: #000;
      font-size: 14px;
      border: none;
      font-weight: 500;
      text-decoration: none;
      margin: 10px 30px;
      border-radius: 8px;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;
      
      & > span{
        
      }
      
      & > svg{
        margin-right: 10px;
        font-size: 18px;
      }
`

export const TotalWrapper = styled.div`
  width: 100%;
  padding: 20px;
  
  & > div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-block: 15px;
    
    & > span:nth-child(1){
      color: rgba(0, 0, 0, 0.5);
    }
    
    & > span:nth-child(2){
      font-weight: 600;
    }
  }
  
  & > div:nth-child(4){
    margin-top: 40px;
    
    & > span:nth-child(2){
      color: #ef5350;
    }
  }
`

export const PaymentOption = styled.div`
    width: 100%;
    background-color: white;
    margin-block: 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s linear;
    
    & > h3{
      font-size: 18px;
      letter-spacing: 1px;
      align-self: flex-start;
    }
    
    & > button{
      text-align: center;
      padding: 25px 50px;
      border: none;
      background-color: #000;
      color: white;
      font-size: 16px;
      display: flex;
      align-items: center;
      
      & > svg{
        font-size: 20px;
        margin-right: 8px;
      }
    }
`

export const OptionWrapper = styled.div`
    width: 95%;
    margin: 25px auto;
`

export const OptionCards = styled.div`
    display: flex;
    gap: 10px;
`

export const OptionCardOne = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 150px;
    border: ${({ isActive }) => {
    return isActive === "emoney" ? "none" : "2px solid #e0e0e0"
    }
    };
    border-radius: 10px;
    color: ${({ isActive }) => {
    return isActive === "emoney" ? "#fff" : "#e0e0e0"
    }
    };
    background-color: ${({ isActive }) => {
    return isActive === "emoney" ? "#ef5350" : "transparent"
    }
    };
    transition: all 0.5s linear;
    
    & > svg{
      font-size: 55px;
    }
`

export const OptionCardTwo = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 150px;
    border: ${({ isActive }) => {
    return isActive === "cash" ? "none" : "2px solid #e0e0e0"
    }
    };
    border-radius: 10px;
    color: ${({ isActive }) => {
    return isActive === "cash" ? "#fff" : "#e0e0e0"
    }
    };
    background-color: ${({ isActive }) => {
    return isActive === "cash" ? "#ef5350" : "transparent"
    }
    };
    transition: all 0.5 linear;
    
    & > svg{
      font-size: 55px;
    }
    
    & > h4{
      padding: 10px;
    }
`