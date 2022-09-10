import { useEffect } from "react"
import SharedLayout from "./SharedLayout"
import Home from "./components/Home/Home"
import Category from "./components/Category/Category"
import Product from "./components/Product/Product"
import Cart from "./components/Cart/Cart"
import { Checkout, ProtectedRoute } from "./components/Checkout"
/*import ProtectedRoute from "./components/Checkout/ProtectedRoute"*/
import { Routes, Route } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { addCartTotal } from "./features/CartReducer"
import { ScrollToTop } from "./utils/ScrollToTop"


function App() {
  let { cartItems } = useSelector((store) => store.cart)
    
    
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
        <Route path = "/category/:category" element = {<Category />} />
        <Route path = "/product/:product" element = {<Product />} />
      </Route>
      <Route path = "/checkout" element = {
      <ProtectedRoute>
        <Checkout cartItem = {cartItems}/>
      </ProtectedRoute>  
      }/>
    </Routes>
    </main>
    </ScrollToTop>
  );
}

export default App;
