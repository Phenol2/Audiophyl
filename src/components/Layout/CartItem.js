import Item from "./Item"
import { Wrapper } from "./Cart.styled"

const CartItem = ({ cartItems }) => {
  return (
    <Wrapper>
    {
      cartItems.map(item => {
        return <Item key = {item.id} items = {item} />
      })
    }
    </Wrapper>
    )
}

export default CartItem;