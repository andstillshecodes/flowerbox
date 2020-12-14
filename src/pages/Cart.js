import { useContext } from 'react'

import { CartContext } from '../contexts'

import styled from 'styled-components'
import banner from '../images/banner-cart.png'
import { PageLayout } from '../layout'
import { CartItem } from '../components'

export const Cart = () => {
  const { cart } = useContext(CartContext)
  console.log(cart)

  return (
    <PageLayout banner={banner}>
      <Ul>
        {cart.line_items?.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </Ul>
      <PriceInfo>
        <Total>Subotal: {cart.subtotal?.formatted_with_symbol}</Total>
      </PriceInfo>
    </PageLayout>
  )
}

const Ul = styled.ul``

const PriceInfo = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Total = styled.div`
  text-transform: lowercase;
  text-align: right;
  padding: ${props => props.theme.sizes.small};
  background: ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.primary};
  max-width: 200px;
  overflow: scroll;
`