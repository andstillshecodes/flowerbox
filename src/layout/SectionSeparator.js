import styled from 'styled-components'

export const SectionSeparator = () => {
  return <Separator aria-hidden='true' />
}

const Separator = styled.div`
  height: ${props => props.theme.sizes.xSmall};

  @media ${props => props.theme.breakpoints.tablet} {
    height: ${props => props.theme.sizes.small};
  }
`
