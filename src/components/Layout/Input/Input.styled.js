import styled from "styled-components"

export const InputWrapper = styled.div`
    width: 100%;
    margin-block: 20px;
    
    & > label{
      display: block;
      font-weight: bold;
      margin-block: 5px;
    }
    
    & > input{
      width: 100%;
      padding: 15px 10px;
      outline: none;
      border-radius: 8px;
      border: none;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;
    }
`