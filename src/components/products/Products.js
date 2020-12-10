import React, { useContext } from 'react'
import { ProductContext } from '../../contexts'

import styled from 'styled-components'
import { ProductCard } from '../../components'

export const Products = () => {
  const { products } = useContext(ProductContext)

  return (
    <ProductsWrapper>
      {products?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductsWrapper>
  )
}

const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  
  @media ${props => props.theme.breakpoints.tablet}{
    justify-content: space-between;
  }
`
