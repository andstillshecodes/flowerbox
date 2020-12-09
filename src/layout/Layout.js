import styled from 'styled-components'

import { SectionSeparator } from '../layout'
import {
  Header,
  Footer,
  Nav
} from '../components'

export const Layout = ({ banner, children }) => {
  return (
    <LayoutWrapper>
      <Nav />
      <SectionSeparator />

      <Header banner={banner} />
      <SectionSeparator />

      <PageWrapper>
        {children}
      </PageWrapper>
      <SectionSeparator />

      <Footer />
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1320px;
  margin: auto;
  min-height: 100vh;
  padding: ${props => props.theme.sizes.small};

  @media ${props => props.theme.breakpoints.tablet} {
    padding: ${props => props.theme.sizes.medium};
  }
`

const PageWrapper = styled.main`
  flex-grow: 1;
`
