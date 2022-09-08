import styled from "styled-components"

export const EmoneyWrapper = styled.form`
    width: 100%;
    height:  ${({ payment }) => {
    return payment === "emoney" ? "220px" : "0px"
    }
    };
    transition: height 1s linear;
`

export const FieldContainer = styled.div`
    width: 95%;
    margin: 25px auto;
    
    & > p{
      font-size: 14px;
      color: red;
    }
    
    & > input{
      width: 100%;
      padding: 22px 15px;
      outline: none;
      border: 2px solid #eee;
      border-radius: 8px;
      
      &::placeholder{
        color: rgba(0, 0, 0, 0.4);
        letter-spacing: 1.8px;
        font-weight: 500;
      }
      
      &::focus{
        border: 2px solid blue;
      }
    }
    
    & > label{
      display: block;
      padding-block: 6px;
    }
`