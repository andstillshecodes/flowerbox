import styled from 'styled-components'
import { CartQty } from '../../components'

export const CartItem = ({ item }) => {
  console.log(item)

  return (
    <Li key={item.id}>
      <ImgWrapper>
        <img
          src={item.media.source}
          alt={item.name}
        />
      </ImgWrapper>
      <p>{item.name.toLowerCase()}</p>
      <CartQty quantity={item.quantity} />
    </Li>
  )
}

const Li = styled.li`

`

const ImgWrapper = styled.div`
  width: 50px;
`