import { createContext, useState } from "react"

 const StoreCtx = createContext()

export const StoreProvider = ({ children }) => {
   const [isNavOpen, setIsNavOpen] = useState(false)
   const [modalOpen, setModalOpen] = useState(false)
   const [details, setDetails] = useState({})
   
  return <StoreCtx.Provider value = {{
          isNavOpen, 
          setIsNavOpen,
          modalOpen,
          setModalOpen,
          details,
          setDetails
        }} 
  >
            { children }
      </StoreCtx.Provider>;
}

export default StoreCtx; 