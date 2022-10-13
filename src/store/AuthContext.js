import { createContext, useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth"

const authContext = createContext()
  const createUser = (email, password ) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

const logout = () => {
  return signOut(auth)
}

export const AuthContextProvider = ({ children }) => {
  let [user, setUser] = useState({})
  
   useEffect(() => {
  const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
      setUser(currentUser)
    })
  return () => {
    unsubscribe()
  }
},[])
  
  
  return (
    <authContext.Provider 
        value = {{
            createUser, 
            logout,
            login,
        }}>
      { children }
    </authContext.Provider>
    )
}

export const UserAuth = () => {
  return useContext(authContext)
}

