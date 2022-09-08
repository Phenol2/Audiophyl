import styled from "styled-components"

export const HamburgerWrapper = styled.div`
    padding: 8px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    font-family: Ubuntu;
`

export const HamburgerLine = styled.div`
    width: 28px;
    height: 3px;
    border-radius: 10px;
    background-color: rgb(255, 255, 255); 
    margin-block: ${({ open }) => {
       return  open 
        ? "-2px"
        : "5px"
      }
      };
    transition: all 0.5s ease-out;
    
    &:nth-child(1){
      transform: ${({ open }) => {
       return  open 
        ? "rotate(45deg)"
        : "rotate(0deg)"
      }
      };
    }
    
    &:nth-child(2){
      display: ${({ open }) => {
       return  open 
        ? "none"
        : "block"
      }
      };
    }
    
    &:nth-child(3){
      transform: ${({ open }) => {
       return  open 
        ? "rotate(-45deg)"
        : "rotate(0deg)"
      }
      };
    }
`


