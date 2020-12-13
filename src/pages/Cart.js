import { useContext } from 'react'

import { CartContext } from '../contexts'

import styled from 'styled-components'
import banner from '../images/banner-cart.png'
import { PageLayout } from '../layout'
import { CartItem } from '../components'

export const Cart = () => {
  const { cart } = useContext(CartContext)

  return (
    <PageLayout banner={banner}>
      <ul>
        {cart.line_items?.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
    </PageLayout>
  )
}


const H1 = styled.h1`
  font-size: ${props => props.theme.fontSizes.xLarge};
`