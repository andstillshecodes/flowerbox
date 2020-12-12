import styled from 'styled-components'

import {
  Header,
  Footer,
  Nav
} from '../components'

export const Layout = ({ banner, children }) => {
  return (
    <LayoutWrapper>
      <Nav />
      <PageWrapper>
        <Header banner={banner} />
        <div>
          {children}
        </div>
      </PageWrapper>
      <Footer />
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.sizes.xSmall};
  max-width: 1100px;
  margin: auto;
  min-height: 100vh;
  padding: ${props => props.theme.sizes.small};

  @media ${props => props.theme.breakpoints.tablet} {
    padding: ${props => props.theme.sizes.medium};
    grid-gap: ${props => props.theme.sizes.small};
  }
`

const PageWrapper = styled.main`
  flex-grow: 1;
  display: grid;
  grid-gap: ${props => props.theme.sizes.xSmall};

  @media ${props => props.theme.breakpoints.tablet} {
    grid-gap: ${props => props.theme.sizes.small};
  }
`
