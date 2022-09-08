import  { createSlice } from "@reduxjs/toolkit";


let initialState = {
  cartItems: [],
  amount: 0,
  total: 0
}

let cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addToCart: (state, action) => {
      let cartItem = action.payload
      
    let existingItem = state.cartItems.find(item => {
      return item.id === action.payload.id
    })
    
    if(existingItem){
      existingItem.amount++
      existingItem.totalPrice += cartItem.price
    }else{
      state.cartItems.push({
        id: cartItem.id,
        name: cartItem.shortName,
        price: cartItem.price,
        amount: 1,
        totalPrice: cartItem.price,
        image: cartItem.image.mobile
      })
    }
    },
    removeItem: (state, action)  => {
      let cartItem = action.payload
      
    let existingItem = state.cartItems.find(item => {
      return item.id === action.payload.id
    })
    
    if(existingItem.amount === 1){
      state.cartItems = state.cartItems.filter(item => {
        return item.id !== cartItem.id
      })
      }else{
        existingItem.amount--
      existingItem.totalPrice -= cartItem.price
      }
    },
    addCartTotal: (state) => {
      let cartTotal = 0
      let total = 0
      state.cartItems.forEach(item => {
       cartTotal += item.amount
       total += item.totalPrice
      })
      state.amount = cartTotal
      state.total = total
    },
    clearCart: (state) => {
      state.cartItems = []
    }
  }
})

export const { 
    addToCart, 
    removeItem,
    addCartTotal,
    clearCart,
} = cartSlice.actions
export default cartSlice.reducer