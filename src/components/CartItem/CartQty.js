import { useContext } from 'react'
import { CartContext } from '../../contexts'

import styled from 'styled-components'
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa'
import { SmallBtn } from '../../components'

export const CartQty = ({ id, quantity }) => {
  const { handleUpdateCartQty } = useContext(CartContext)

  return (
    <CartQtyWrapper>
      <SmallBtn
        onClick={() => handleUpdateCartQty(id, quantity - 1)}
        ariaLabel='Add one'>
        <FaMinusSquare />
      </SmallBtn>
      <Qty>{quantity}</Qty>
      <SmallBtn
        onClick={() => handleUpdateCartQty(id, quantity + 1)}
        ariaLabel='Remove one'>
        <FaPlusSquare />
      </SmallBtn>
    </CartQtyWrapper>
  )
}

const CartQtyWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Qty = styled.div`
  display: inline-block;
  margin: ${props => props.theme.sizes.xSmall};
`