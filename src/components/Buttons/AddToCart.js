import { useContext } from 'react'

import { CartContext } from '../../contexts'

import styled from 'styled-components'

export const AddToCart = ({ product }) => {
  const { handleAddToCart } = useContext(CartContext)

  return (
    <ButtonWrapper>
      <Price>${product.price.raw}</Price>
      <Button type='button' onClick={() => handleAddToCart(product.id, 1)}>Add to Cart</Button>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.div`
  display: flex;
  margin: ${props => props.theme.sizes.xSmall};
  padding-bottom: ${props => props.theme.sizes.xSmall};
`

const Price = styled.div`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.softWhite};
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.small};
  padding: ${props => props.theme.sizes.xSmall};
`

const Button = styled.button`
  background: ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.secondary};
  font-family: ${props => props.theme.fonts.secondary};
  font-size: ${props => props.theme.fontSizes.small};
  padding: ${props => props.theme.sizes.xSmall};
  text-transform: lowercase;
`
