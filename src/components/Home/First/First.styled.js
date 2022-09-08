import styled from "styled-components"
import { Link } from "react-router-dom"



export const StyledLink = styled(Link)`
        background-color: #ef5350;
        font-size: 13px;
        font-weight: 600;
        text-decoration: none;
        color: rgba(255, 255, 255, 0.9);
        text-align: center;
        padding: 20px 40px;
        border: none;
        letter-spacing: 1.5px;
`


export const ImageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0 );
    display: flex;
    position: relative;
`

export const Image = styled.img`
    width: 100%;
    margin-top: 0px;
    margin-bottom: -170px;
    object-fit: contain;
`

export const OverlayText = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 90%;
    z-index: 500;
    color: white;
    margin-top: 80px;
    background-color: rgba(0, 0, 0, 0.5);
    
    & > p{
      margin-bottom: 40px;
    }
    
    & > p:nth-child(1){
        color: rgba(255, 255, 255, 0.4);
        font-size: 13px;
        letter-spacing: 10px;
        font-weight: 600;
      }
      
    & > p:nth-child(2){
        color: rgba(255, 255, 255, 0.9);
        font-size: 50px;
        letter-spacing: 1px;
        font-weight: 520;
        margin: 0 auto;
      }
      
   & > p:nth-child(3){
        color: rgba(255, 255, 255, 0.9);
        font-size: 50px;
        letter-spacing: 1px;
        font-weight: 520;
      }    


   & > p:nth-child(4){
        color: rgba(255, 255, 255, 0.4);
        font-size: 14px;
        letter-spacing: 1px;
        font-weight: 500;
        text-align: center;
        padding: 8px;
        line-height: 26px;
      } 
      
`