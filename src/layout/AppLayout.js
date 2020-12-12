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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`
