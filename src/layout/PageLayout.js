import styled from 'styled-components'
import { Banner } from '../components'

export const PageLayout = ({ banner, children }) => {
  return (
    <PageLayoutWrapper>
      <Banner banner={banner} />
      <div>
        {children}
      </div>
    </PageLayoutWrapper>
  )
}

const PageLayoutWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  display: grid;
  margin: ${props => props.theme.sizes.xSmall} auto;
  grid-gap: ${props => props.theme.sizes.xSmall};

  @media ${props => props.theme.breakpoints.tablet} {
    margin: ${props => props.theme.sizes.small} auto;
    grid-gap: ${props => props.theme.sizes.small};
  }
`
