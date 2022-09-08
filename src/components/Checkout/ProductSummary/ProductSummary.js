import {
  StyledLink,
  Container,
  TotalWrapper,
} from "../Checkout.styled"

import { FaLongArrowAltLeft } from "react-icons/fa"


import Summary from "../Summary/Summary"
import NumFormatter from "../../../utils/NumFormatter"


const ProductSummary = ({ 
  cartItem, 
  cartItems, 
  shipping, 
  VAT, 
  total,
  grandTotal 
}) => {
  
  return (
        <Container>
        <StyledLink to = "/" >
        <FaLongArrowAltLeft />
            <span>BACK TO THE SHOP</span>
        </StyledLink>
        <Summary cartItems = {cartItems} />
        <TotalWrapper>
        <div>
          <span>TOTAL</span>
          <span>${NumFormatter(total)}</span>
        </div>
        <div>
          <span>SHIPPING</span>
          <span>${shipping}</span>
        </div>
        <div>
          <span>VAT</span>
          <span>${NumFormatter(VAT)}</span>
        </div>
          <div>
          <span>GRAND TOTAL</span>
          <span>${NumFormatter(grandTotal)}</span>
        </div>
        </TotalWrapper>
      </Container> 
    )
}

export default ProductSummary;