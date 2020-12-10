import banner from '../images/banner.png'
import { Layout } from '../layout'
import { Products } from '../components'

export const Home = () => {
  return (
    <Layout banner={banner}>
      <Products />
    </Layout>
  )
}
