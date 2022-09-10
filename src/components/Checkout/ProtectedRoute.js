import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
  let { cartItems } = useSelector((store) => store.cart)
  
  if (cartItems.length === 0) {
    return <Navigate to = "/" />;
  }
  return children;
}

export default ProtectedRoute;