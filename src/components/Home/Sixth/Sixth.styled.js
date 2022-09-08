import styled from "styled-components"

export const SixthWrapper = styled.div`
    width: 100vw;
`

export const Container = styled.div`
    position: relative;
    width: 90%;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Image = styled.img`
    width: 100%;
    object-fit: contain;
    border-radius: 8px;
`

export const Details = styled.div`
    text-align: center;
    & > h2:nth-child(1){
      margin-top: 60px;
      text-align: center;
      font-weight: 500;
      font-size: 28px;
    }
    
   & > h2:nth-child(2){
      text-align: center;
      font-weight: 500;
      margin-top: 5px;
      font-size: 26px;
      
      & > span{
        color: #ef5350;
      }
    }
    
    & > p{
       margin-top: 40px; 
       font-weight: lighter;
       line-height: 28px;
       font-size: 15px;
    }
`