import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserAuth } from "../../store/AuthContext"

import {
 Wrapper,
 FormWrapper,
 StyledLink,
} from "./Signup.styled"

import Input from "../Layout/Input/Input"

const Signup = () => {
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [error, setError] = useState("")
  
  let navigate = useNavigate()
  
  const { createUser } = UserAuth()
  
  
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
       await createUser(email, password)
       setEmail("")
       setPassword("")
      navigate("/")
    } catch (e) {
      setError(e.message)
      console.log(error)
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
          <button onClick = {handleSubmit}  >
            SIGNUP
          </button>
          <p>
            You already have an account?  
            <StyledLink to = "/signin"> Signin </StyledLink>
          </p>
      </FormWrapper>
    </Wrapper>
    )
}

export default Signup;