import React, { createContext, useState } from 'react'
import { commerce } from '../lib/commerce'

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState({})

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async ({ productId, quantity }) => {
    setCart(await commerce.cart.add(productId, quantity))
  }

  const handleUpdateCartQty = async ({ productId, quantity }) => {
    setCart(await commerce.cart.update(productId, { quantity }))
  }

  const handleRemoveFromCart = async ({ productId }) => {
    setCart(await commerce.cart.remove(productId))
  }

  const handleEmptyCart = async () => {
    setCart(await commerce.cart.empty())
  }

  return (
    <CartContext.Provider value={{ cart }}>
      {children}
    </CartContext.Provider>
  )
}

