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
  display: grid;
  align-items: center;
  grid-gap: ${props => props.theme.sizes.small};
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr) ) ;
`
