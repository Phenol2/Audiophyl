import {
  ItemWrapper,
  StyledWrapper,
  Left
} from "./Summary.styled"

import { useSelector } from "react-redux"


const Item = ({ items }) => {
    let { cartItems } = useSelector((store) => store.cart)
  let mainItem = cartItems.find(item => {
          return item.id === items.id
        }) 
  
  return (
    <ItemWrapper>
    <Left>
      <img src = {items.image} alt = {items.name}/>
      <div>
        <span>{items.name}</span>
        <span>$ {items.price}</span>
      </div>
    </Left>  
      <StyledWrapper>
          <span>{
             mainItem 
        ? `x ${mainItem.amount}` 
        : `${items.amount}`
        }</span>
      </StyledWrapper>
    </ItemWrapper>
    )
}

export default Item;