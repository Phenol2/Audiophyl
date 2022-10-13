import {
  InputWrapper,
} from "./Input.styled"

const Input = ({ type, onChange, label }) => {
  return (
    <InputWrapper>
      <label>{label}</label>
      <input type = {type} onChange = {onChange} />
    </InputWrapper>
    )
}

export default Input;