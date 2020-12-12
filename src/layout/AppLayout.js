import styled from 'styled-components'
import { Footer, Nav } from '../components'

export const AppLayout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Nav />
      <ContentWrapper>
        {children}
        <Footer />
      </ContentWrapper>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: ${props => props.theme.sizes.small};
`

const ContentWrapper = styled.div`
  grid-area: 3 / 2 / 4 / 3;
  overflow: scroll;
  padding-bottom: ${props => props.theme.sizes.xSmall};

  @media ${props => props.theme.breakpoints.tablet} {
    padding-bottom: 2rem;
  }
`
