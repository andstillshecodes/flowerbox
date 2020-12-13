import styled from 'styled-components'
import { AddToCart, SmallBtn } from '../../components'
import { FaTimesCircle } from 'react-icons/fa'

export const ProductCardBack = ({ product, setShowBack }) => {
  console.log(product)
  return (
    <CardBack>
      <SmallBtn onClick={() => setShowBack(false)} ariaLabel='Close Info'>
        <FaTimesCircle />
      </SmallBtn>
      <CardTop>
        <ImgWrapper>
          <img
            style={imgStyles}
            src={product.media.source}
            alt={product.name}
          />
        </ImgWrapper>
        <div>
          <H2>{product.name.toLowerCase()}</H2>
          <AddToCart product={product} />
        </div>
      </CardTop>
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

  display: flex;
  flex-direction: column;
  align-items: flex-end;


  @media ${props => props.theme.breakpoints.tablet} {
    padding: ${props => props.theme.sizes.small}; 
  }
`

const CardTop = styled.div`
  display: flex; 
  align-items: center;
  width: 100%;
`

const H2 = styled.h2`
  font-size: ${props => props.theme.fontSizes.large};
`

const ImgWrapper = styled.div`
  width: 4rem;
  margin-right: ${props => props.theme.sizes.xSmall};
`

const imgStyles = {
  width: '100%',
  borderRadius: '50%'
}
