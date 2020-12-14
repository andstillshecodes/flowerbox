import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../contexts'

import styled from 'styled-components'
import banner from '../images/banner-cart.png'
import { PageLayout } from '../layout'
import { CartItem } from '../components'

export const Cart = () => {
  const { cart, handleEmptyCart } = useContext(CartContext)

  return cart.line_items.length > 0
    ? (
      <PageLayout banner={banner}>
        <Ul>
          {cart.line_items?.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </Ul>
        <PriceInfo>
          <EmptyCart type='button' onClick={() => handleEmptyCart()}>
            Empty Cart
          </EmptyCart>
          <Total>Subotal: {cart.subtotal?.formatted_with_symbol}</Total>
        </PriceInfo>
      </PageLayout>
    )
    : (
      <PageLayout banner={banner}>
        <H1>
          Your cart is empty. Visit our <Span><Link to='/'>Flowerbox.</Link></Span>
        </H1>
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
  margin: ${props => props.theme.sizes.xSmall};
`

const EmptyCart = styled.div`
  text-transform: lowercase;
  text-align: right;
  padding: ${props => props.theme.sizes.small};
  background: ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.primary};
  margin: ${props => props.theme.sizes.xSmall};

  &:hover {
    cursor: pointer;
  }
`

const H1 = styled.h1`
  color: ${props => props.theme.colors.primary};
  text-transform: none;
`

const Span = styled.span`
  color: ${props => props.theme.colors.secondary};
  text-decoration: underline;
`
