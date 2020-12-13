import banner from '../images/banner-home.png'
import { PageLayout } from '../layout'
import { Products } from '../components'

export const Home = () => {
  return (
    <PageLayout banner={banner}>
      <Products />
    </PageLayout>
  )
}
