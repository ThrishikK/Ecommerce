import React from 'react'

console.log('I am in CartContext.js')

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
})

export default CartContext
// CHECK
