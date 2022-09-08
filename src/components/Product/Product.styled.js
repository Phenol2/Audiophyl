import styled from "styled-components"

export const ProductWrapper = styled.div`
    width: 100vw;
    margin-block: 80px;
    color: black;
`

export const Container = styled.div`
    position: relative;
    width: 90%;
    margin: 80px auto;
    display: flex;
    flex-direction: column;
    
    border-radius: 8px;
    
    & > p{
      align-self: flex-start;
      color: #ef5350;
      font-size: 15px;
      letter-spacing: 6px;
      }
      
    & > h1{
      font-size: 32px;
      align-self: flex-start;
      margin-block: 30px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.7);
    }
    
    & > button{
      width: 70%;
      margin-block: 10px;
      background-color: #ef5350;
      color: white;
      text-align: center;
      border: none;
      padding: 20px;
      font-weight: 500;
      font-size: 18px;
      align-self: center;
      }
`

export const Image = styled.img`
    width: 100%;
    object-fit: contain;
    border-radius: 8px;
    margin-block: 50px;
`

export const ProductDesc = styled.div`
    & > p{
    line-height: 28px;
    color: rgba(0, 0, 0, 0.6);
    }
`

export const ProductQuantity = styled.div`
    width: 70%;
    background-color: #e0e0e0;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block: 30px;
    font-size: 20px;
    font-weight: bold;
    align-self: center;
    
    & > button{
      border: none;
      background-color: transparent;
      outline: none;
      font-size: 24px;
    }
    
    & > svg{
      font-size: 25px;
      color: rgba(0, 0, 0, 0.8);
      }
    }
` 

export const ProductFeatures = styled.div`
    color: #000;
    text-align: left;
    margin-block: 80px;
    
    & > h2{
      font-weight: 500;
      font-size: 30px;
      align-self: flex-start;
    }
    
    
  & > p{
    margin-block: 30px;
    line-height: 1.9rem;
    font-size: 1.0rem;
    color: rgba(0, 0, 0, 0.6);
  }
`

export const ProductBox = styled.div`
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 1.5px 6px;
    border-radius: 0.9rem;
    padding: 1.6rem;

    & > h1{
      font-weight: 500;
    }
    
    & > div{
      padding-block: 25px;
      
      & > p{
        margin-block: 1.2rem;
        display: flex;
        gap: 2rem;
        font-size: 18px;
        color: rgba(0, 0, 0, 0.6);
        
        & > span:nth-child(1){
          color: #ef5350;
        }
      }
    }
`

export const ProductGallery = styled.div`
    margin-top: 9rem;
`

export const Gallery = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 0.6rem;
    margin-block: 0.5rem;
`