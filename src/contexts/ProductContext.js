import React, { createContext, useState } from 'react'
import { commerce } from '../lib/commerce'

const ProductContext = createContext()

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    setProducts(await commerce.products.list())
  }

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  )
}

