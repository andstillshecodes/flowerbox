import { useContext } from 'react'

import { CartContext } from '../contexts'

import styled from 'styled-components'
import banner from '../images/banner-cart.png'
import { PageLayout } from '../layout'

export const Cart = () => {
  const { cart } = useContext(CartContext)
  console.log(cart)

  return (
    <PageLayout banner={banner}>
      <ul>
        {cart.line_items?.map(product => (
          <li key={product.id}>
            {product.name.toLowerCase()}

          </li>
        ))}
      </ul>
    </PageLayout>
  )
}


const H1 = styled.h1`
  font-size: ${props => props.theme.fontSizes.xLarge};
`