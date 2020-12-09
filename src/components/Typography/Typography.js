import styled from 'styled-components'

export const H1 = styled.h1`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.sizes.small};
  margin-left: ${props => props.theme.sizes.small};
  text-transform: lowercase;
`

export const H2 = styled.h2`
  color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.sizes.xSmall};
`

export const BrandH2 = styled(H2)`
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontSizes.small};
  text-transform: uppercase;
`

export const FooterH2 = styled(H2)`
  text-align: center;
  text-transform: lowercase;

  @media ${props => props.theme.breakpoints.desktop} {
    text-align: right;
  }
`

export const Ul = styled.ul`
  list-style: none;
`

export const Li = styled.li`
  color: ${props => props.theme.colors.blackOpaque};
`

export const FooterLi = styled(Li)`
  text-transform: uppercase;
  text-align: center;
  padding: ${props => props.theme.sizes.xSmall} 0;
  font-size: ${props => props.theme.fontSizes.small};

  @media ${props => props.theme.breakpoints.desktop} {
    text-align: right;
  }
`
