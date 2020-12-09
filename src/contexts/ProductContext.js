import React, { createContext, useState, useEffect } from 'react'
import { commerce } from '../lib/commerce'

export const ProductContext = createContext()

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <ProductContext.Provider value={{ products, fetchProducts }}>
      {children}
    </ProductContext.Provider>
  )
}
