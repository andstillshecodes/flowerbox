
import styled from 'styled-components'
import { ProductCardBack, ProductCardFront } from '../../components'

export const ProductCard = ({ product }) => {

  return (
    <Li>
      <ProductCardFront product={product} />
      <ProductCardBack product={product} />
    </Li>
  )
}

const Li = styled.li`
  width: 100%;
  box-shadow: ${props => props.theme.shadows.primary};
  position: relative;
`
