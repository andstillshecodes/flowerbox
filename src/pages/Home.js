import React, { useContext } from 'react'
import { ProductContext, CartContext } from '../contexts'

import banner from '../images/banner.png'
import { Layout } from '../layout'
import { Products } from '../components'

export const Home = () => {
  const { products } = useContext(ProductContext)
  const { cart } = useContext(CartContext)

  console.log(products)
  console.log(cart)
  return (
    <Layout banner={banner}>
      <Products />
    </Layout>
  )
}
