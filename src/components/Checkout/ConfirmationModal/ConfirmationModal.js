import { useContext } from "react"
import ctx from "../../../store/Storectx"

import { useDispatch } from "react-redux"
import { clearCart } from "../../../features/CartReducer"

import {
  Wrapper,
  Confirm,
  StyledLink,
} from "./Confirmation.styled"


const ConfirmationModal = ({ info }) => {
  let {  details } = useContext(ctx)
  let dispatch = useDispatch()
  
  return (
    <Wrapper>
      <Confirm>
        <h2>Thanks For Your Purchase</h2>
        <p>
          Hey <strong>{details.fullName}!</strong> Your order has been submitted succesfully. To keep track of your order, follow the instructions which has been sent to <strong>{details.mail}</strong>.
        </p>
        <StyledLink 
          to = "/"
          onClick = {() =>  dispatch(clearCart())}
          >
          RETURN TO THE HOMEPAGE
        </StyledLink>
      </Confirm>
    </Wrapper>
    )
}

export default ConfirmationModal;