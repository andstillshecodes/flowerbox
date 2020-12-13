import styled from 'styled-components'
import { AddToCart, CircleBtn } from '../../components'
import { FaTimesCircle } from 'react-icons/fa'

export const ProductCardBack = ({ product }) => {
  const close = () => console.log('closed')

  return (
    <CardBack style={{ border: '1px solid tomato' }}>
      <CircleBtn onClick={close}>
        <FaTimesCircle />
      </CircleBtn>
      <img
        style={imgStyles}
        src={product.media.source}
        alt={product.name} />
      <H2>{product.name.toLowerCase()}</H2>
      <AddToCart product={product} />
      <p dangerouslySetInnerHTML={{ __html: product.description }} />
    </CardBack>
  )
}

const CardBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  background: ${props => props.theme.colors.softWhite};
  padding: ${props => props.theme.sizes.xSmall};


  @media ${props => props.theme.breakpoints.tablet} {
    padding: ${props => props.theme.sizes.small}; 
  }
`

const H2 = styled.h2`
  font-size: ${props => props.theme.fontSizes.large};
`

const imgStyles = {
  width: '4rem',
  borderRadius: '50%',
}