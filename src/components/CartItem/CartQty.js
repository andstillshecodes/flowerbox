import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa'
import { SmallBtn } from '../../components'

export const CartQty = ({ quantity }) => {
  return (
    <div>
      <SmallBtn><FaPlusSquare /></SmallBtn>
      <span>{quantity}</span>
      <SmallBtn><FaMinusSquare /></SmallBtn>
    </div>
  )
}