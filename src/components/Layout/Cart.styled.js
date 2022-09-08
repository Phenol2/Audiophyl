import styled from "styled-components"


export const Wrapper = styled.div`
    width: 100vw;
`

export const ItemWrapper = styled.div`
  width: 90vw;
  margin: 16px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`

export const StyledWrapper = styled.div`
    display: flex;
    align-items: center;

    & > svg{
      font-size: 24px;
    }

    & > span{
      margin-inline: 18px;
    }
`

export const Left = styled.div`
    display: flex;
  
    & > img{
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 20px;
    }

    & > div{
    display: flex;
    flex-direction: column;
    
    & > span:nth-child(1){
      font-size: 17px;
      font-weight: bold;
      padding-block: 8px;
    }
    
   & > span:nth-child(2){
      font-size: 15px;
      color: rgba(0, 0, 0, 0.7);
      }
    }
`