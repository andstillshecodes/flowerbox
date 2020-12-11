import styled from 'styled-components'
import { ProductCardBack, ProductCardFront } from '../../components'

export const ProductCard = ({ product }) => {
  return (
    <Li>
      <ProductCardFront product={product} />
      {/* <ProductCardBack product={product} /> */}
    </Li>
  )
}

const Li = styled.li`
  max-width: 100%;
  box-shadow: ${props => props.theme.shadows.primary};
  margin: ${props => props.theme.sizes.xSmall} 0;

  @media ${props => props.theme.breakpoints.tablet} {
    max-width: 32%;
  }
`
