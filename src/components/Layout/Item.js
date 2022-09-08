import {
  ItemWrapper,
  StyledWrapper,
  Left
} from "./Cart.styled"

import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeItem } from "../../features/CartReducer"
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai"


const Item = ({ items }) => {
  let dispatch = useDispatch()
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
        <AiFillMinusCircle onClick = {() => dispatch(removeItem(items))
      } 
      disabled = {!mainItem}
      />
          <span>{
             mainItem 
        ? mainItem.amount 
        : items.amount
        }
          </span>
        <AiFillPlusCircle onClick = {() => dispatch(addToCart(items))
      }/>
      </StyledWrapper>
    </ItemWrapper>
    )
}

export default Item;