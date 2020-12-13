import { useContext } from 'react'

import { CartContext } from '../contexts'

import { PageLayout } from '../layout'

export const Cart = () => {
  const { cart } = useContext(CartContext)
  console.log(cart)

  return (
    <PageLayout>
      <ul>
        {cart.line_items?.map(product => (
          <li key={product.id}>
            {product.name}

          </li>
        ))}
      </ul>
    </PageLayout>
  )
}
