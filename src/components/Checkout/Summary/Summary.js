import {
  Wrapper,
} from "./Summary.styled"
import Item from "./Item"


const Summary = ({ cartItems }) => {
  return (
     <Wrapper>
     <p>SUMMARY</p>
    {
      cartItems.map(item => {
        return <Item key = {item.id} items = {item} />
      })
    }
    </Wrapper>
    )
}

export default Summary;