import { useContext } from 'react'

import { CartContext } from '../../contexts'

import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa'
import { SmallBtn } from '../../components'

export const CartQty = ({ id, quantity }) => {
  const { handleUpdateCartQty } = useContext(CartContext)

  return (
    <div>
      <SmallBtn
        onClick={() => handleUpdateCartQty(id, quantity - 1)}
        ariaLabel='Add one'>
        <FaMinusSquare />
      </SmallBtn>
      <span>{quantity}</span>
      <SmallBtn
        onClick={() => handleUpdateCartQty(id, quantity + 1)}
        ariaLabel='Remove one'>
        <FaPlusSquare />
      </SmallBtn>
    </div>
  )
}