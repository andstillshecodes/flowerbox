import styled from 'styled-components'
import { CartQty } from '../../components'

export const CartItem = ({ item }) => {
  return (
    <Li key={item.id}>
      <ImgWrapper>
        <img
          src={item.media.source}
          alt={item.name}
        />
      </ImgWrapper>
      <ItemInfo>
        <P>{item.name.toLowerCase()}</P>
        <CartQty id={item.id} quantity={item.quantity} />
      </ItemInfo>
      <p>{item.price.formatted_with_symbol}</p>
    </Li>
  )
}

const Li = styled.li`
  width: 100%;
  display: flex;
  margin-bottom: ${props => props.theme.sizes.small};
  padding: ${props => props.theme.sizes.small};
  background: ${props => props.theme.colors.softWhite};

  &:hover {
    box-shadow: ${props => props.theme.shadows.primary};
  }
`

const ImgWrapper = styled.div`
  width: 50px;
`

const P = styled.p`
  color: ${props => props.theme.colors.primary};
`

const ItemInfo = styled.div`
  flex-grow: 1;
  margin: 0 ${props => props.theme.sizes.small};
`