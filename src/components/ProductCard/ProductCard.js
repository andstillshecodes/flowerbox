import { useState } from 'react'

import styled from 'styled-components'
import { ProductCardBack, ProductCardFront } from '../../components'

export const ProductCard = ({ product }) => {
  const [showBack, setShowBack] = useState(false)

  return (
    <Li>
      <ProductCardFront
        product={product}
        setShowBack={setShowBack}
      />

      {showBack
        ? <ProductCardBack
            product={product}
            setShowBack={setShowBack}
          />
        : null}
    </Li>
  )
}

const Li = styled.li`
  width: 100%;
  box-shadow: ${props => props.theme.shadows.primary};
  position: relative;
`
