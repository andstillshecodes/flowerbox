import styled from 'styled-components'
import { AddToCart, CircleBtn } from '../../components'
import { FaInfoCircle } from 'react-icons/fa'


export const ProductCardFront = ({ product }) => {
  const showInfo = () => console.log(product)

  return (
    <div>
      <img src={product.media.source} alt={product.name} />
      <CardTop>
        <Title>{product.name}</Title>
        <CircleBtn type='button' onClick={showInfo}><FaInfoCircle /></CircleBtn>
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