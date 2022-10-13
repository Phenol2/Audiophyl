import { 
  ModalWrapper,
  Header,
  Container,
  CartBody,
  CartBottom,
  StyledLink,
  Overlay,
} from "./Modal.styled"
import CartItem from "./CartItem"

import { useContext} from "react"
 import ctx from "../../store/Storectx"
 
import { ImCancelCircle } from "react-icons/im"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { BsCart4 } from "react-icons/bs"

import { useSelector } from "react-redux"

import NumFormatter from "../../utils/NumFormatter"



const ModalOverlay = () => {
  let {  modalOpen, setModalOpen } = useContext(ctx)
  let { cartItems, total } = useSelector((store) => store.cart)
  
  
  return (
    <ModalWrapper open = {modalOpen}>
      <Header>
        <Container>
        <div>
          CART
        </div>
        <ImCancelCircle 
        onClick = {() => setModalOpen(false)}
        />
        </Container>
      </Header>
      <CartBody>
      {
      cartItems.length === 0 ?
       <div>
        <HiOutlineShoppingBag />
        <div>
          YOUR CART IS EMPTY
        </div>
        </div>
        : <CartItem cartItems = {cartItems}/>
      }
      </CartBody>
      <CartBottom>
      { cartItems.length === 0 && <Overlay />}
        <div>
          <span>TOTAL</span>
          <span>${NumFormatter(total)}</span>
        </div>
          <StyledLink 
              to = "/checkout" 
              onClick = {() => setModalOpen(false)}
              >
            <BsCart4 />
            <span>CHECKOUT</span>
          </StyledLink>
      </CartBottom>
    </ModalWrapper>
    )
}

export default ModalOverlay;