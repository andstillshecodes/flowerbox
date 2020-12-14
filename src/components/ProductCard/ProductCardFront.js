import styled from 'styled-components'
import { AddToCart, SmallBtn } from '../../components'
import { FaInfoCircle } from 'react-icons/fa'

export const ProductCardFront = ({ product, setShowBack }) => {
  return (
    <div>
      <img
        src={product.media.source}
        alt={product.name}
        onClick={() => setShowBack(true)}
        style={imgStyles}
      />
      <CardTop>
        <Title>{product.name}</Title>
        <SmallBtn type='button' onClick={() => setShowBack(true)} ariaLabel='Show Info'><FaInfoCircle /></SmallBtn>
      </CardTop>
      <AddToCart product={product} />
    </div>
  )
}

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${props => props.theme.sizes.xSmall};
`

const Title = styled.div`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.primary};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.medium};
  text-transform: lowercase;
`

const imgStyles = {
  cursor: 'pointer'
}
