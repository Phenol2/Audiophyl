import styled from "styled-components"
import  { Link } from "react-router-dom"

export const StyledLink = styled(Link)`
      background-color: #ef5350;
      padding:  25px 95px;
      text-align: center;
      color: white;
      border: none;
      font-size: 20px;
      font-weight: 600;
      text-decoration: none;
      margin-block: 10px 30px;
      
      & > svg{
        margin-right: 10px;
      }
`


export const Overlay = styled.div`
    width: 100%;
    margin-right: -15px;
    height: 150px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.5);
`


export const ModalWrapper = styled.div`
    width: 100vw;
    position: fixed;
    top: 0;
    left: ${({ open }) => {
      return open ? "0" : "100%"
      }
    };
    z-index: 10000;
    transition: all 0.8s linear;
`

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    & > div{
      font-weight: bold;
      font-size: 20px;
    }
    
    & > svg{
      font-size: 22px;
    }
`

export const Header = styled.div`
    width: 100vw;
    padding-block: 22px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    background-color: white;
`

export const CartBody = styled.div`
    width: 100vw;
    height: 72vh;
    background-color: #eee;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    & > div{
      display: flex;
      flex-direction: column;
      align-items: center;
    
    & > svg{
      font-size: 40px;
      font-weight: bolder;
      text-align: center;
      }
    
    & > div{
      font-weight: 500;
      font-size: 20px;
     }
    }
`


export const CartBottom = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 25px 20px;
    text-align: center;
    position: relative;
    
    
    & > div{
      display: flex;
      width: 95%;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;
      padding-inline: 20px;
      font-size: 20px;
      
      & > span:nth-child(2){
        font-weight: 600;
      }
    }
    
`