import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "../features/CartReducer"


export let store = configureStore({
  reducer:{
    cart: cartReducer,
  }
})