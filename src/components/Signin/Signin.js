import { useState } from "react"
import { UserAuth } from "../../store/AuthContext"

import { useNavigate } from "react-router-dom"

import {
 Wrapper,
 FormWrapper,
 StyledLink,
} from "./Signin.styled"

import Input from "../Layout/Input/Input"

const Signin = () => {
  let navigate = useNavigate()
  
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [error, setError] = useState("")
  let { login } = UserAuth()
  
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await  login(email,password)
      setEmail("")
      setPassword("")
      navigate('/')
    } catch (e) {
       console.log(e.message)
    setError(e.message)
    }
   
  }
  
  
  return (
    <Wrapper>
      <h2>audiophile</h2>
      <FormWrapper>
        <Input 
          type = "text" 
          label = "Email"
          onChange = {(e) => setEmail(e.target.value)}
          />
        <Input 
          type = "text" 
          label = "Password" 
          onChange = {(e) => setPassword(e.target.value)}
          />
          <button onClick = {handleSubmit}>
            SIGNUP
          </button>
          <p>
            You don't have an account?  
            <StyledLink to = "/signup"> Signup </StyledLink>
          </p>
      </FormWrapper>
    </Wrapper>
    )
}

export default Signin;