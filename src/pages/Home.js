import banner from '../images/banner.png'
import { PageLayout } from '../layout'
import { Products } from '../components'

export const Home = () => {
  return (
    <PageLayout banner={banner}>
      <Products />
    </PageLayout>
  )
}
