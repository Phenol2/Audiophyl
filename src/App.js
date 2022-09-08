import { useEffect } from "react"
import SharedLayout from "./SharedLayout"
import Home from "./components/Home/Home"
import Category from "./components/Category/Category"
import Product from "./components/Product/Product"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"
import { Routes, Route } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { addCartTotal } from "./features/CartReducer"
import { ScrollToTop } from "./utils/ScrollToTop"


function App() {
  let { cartItems } = useSelector((store) => store.cart)
  console.log(cartItems)
    
    
    
    let dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(addCartTotal())
    }, [cartItems])
    
  return (
  <ScrollToTop>  
    <main>
    <Cart />
    <Routes>
      <Route path = "/" element = {<SharedLayout />}>
        <Route index element = {<Home />}/>
        <Route path = "/checkout" element = {<Checkout cartItem = {cartItems}/>}/>
        <Route path = "/category/:category" element = {<Category />} />
        <Route path = "/product/:product" element = {<Product />} />
      </Route>
    </Routes>
    </main>
    </ScrollToTop>
  );
}

export default App;
