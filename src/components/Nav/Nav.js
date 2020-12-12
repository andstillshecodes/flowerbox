import { useContext } from 'react'
import { CartContext } from '../../contexts'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import cartIcon from '../../images/shopping-cart.svg'
import { InlineBrand } from '../../components'

export const Nav = () => {
  const { cart } = useContext(CartContext)

  return (
    <NavWrapper>
      <InlineBrand />
      <Link to='/cart'>
        <CartIconWrapper>
          <span>{cart.total_items}</span>
          <img src={cartIcon} alt='shopping cart' />
        </CartIconWrapper>
      </Link>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.softWhite};
  height: ${props => props.theme.sizes.xLarge};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.sizes.small};
`

const CartIconWrapper = styled.div`
  display: flex;
  align-items: center;
`
