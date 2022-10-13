 import { useContext } from "react"
 import ctx from "../../store/Storectx"
 import { useSelector } from "react-redux"

import { HeaderWrapper,
    Container, 
    Menus, 
    StyledLink,
    CartWrapper
} from "./Header.styled"


import { AiOutlineShoppingCart } from "react-icons/ai"
import { BsSpeakerFill, BsEarbuds } from "react-icons/bs"
import { FaHeadphones } from "react-icons/fa"
import { RiHome2Fill } from "react-icons/ri"
import Navbar from "./Nav"



const Header = () => {
   let { isNavOpen,
         setIsNavOpen,
         setModalOpen, 
         modalOpen 
     
   } = useContext(ctx)
  let { amount } = useSelector(store => store.cart)
  return (
    <HeaderWrapper>
      <Container>
        <Navbar />
        <h2>audiophile</h2>
        <CartWrapper>
       {
        amount && <div>{amount}</div>
       }
          <AiOutlineShoppingCart onClick = {() => setModalOpen(!modalOpen)} />
        </CartWrapper>
      <Menus open = {isNavOpen}>
        <StyledLink 
        to = "/"
        activeclassname = "active"
        >
          <li  onClick = {() => setIsNavOpen(false)}>
            <span>HOME</span>
            <RiHome2Fill />
          </li>
        </StyledLink>
        <StyledLink 
        to = "/category/headphones"
        activeclassname = "active"
        >
          <li onClick = {() => setIsNavOpen(false)}>
            <span>HEADPHONES</span>
            <FaHeadphones />
          </li>
        </StyledLink>
        <StyledLink 
        to = "/category/speakers"
        activeclassname = "active"
        >
          <li  onClick = {() => setIsNavOpen(false)}>
            <span>SPEAKERS</span> 
            <BsSpeakerFill /> 
          </li>
        </StyledLink>
        <StyledLink 
        to = "/category/earphones"
        activeclassname = "active"
        >
          <li  onClick = {() => setIsNavOpen(false)}>
            <span>EARPHONES</span>
            <BsEarbuds />
          </li>
        </StyledLink>
      </Menus>
      </Container>
    </HeaderWrapper>
    )
}

export default Header;