import styled from 'styled-components'

import { FooterLink } from '../../components'

export const FooterList = ({ title, links }) => {
  return (
    <TitledListWrapper>
      <FooterH2>Customer Service</FooterH2>
      <ul>
        {links?.map(({ title, url }) => (
          <FooterLi key={title}>
            <FooterLink to={url}>
              {title}
            </FooterLink>
          </FooterLi>
        ))}
      </ul>
    </TitledListWrapper>
  )
}

const TitledListWrapper = styled.div`
  padding: ${props => props.theme.sizes.small};

  @media ${props => props.theme.breakpoints.desktop} {
    border-right: 1px solid ${props => props.theme.colors.detail};
  }
`

const FooterH2 = styled.h2`
  text-align: center;
  text-transform: lowercase;

  @media ${props => props.theme.breakpoints.desktop} {
    text-align: right;
  }
`

const FooterLi = styled.li`
  text-transform: uppercase;
  text-align: center;
  padding: ${props => props.theme.sizes.xSmall} 0;
  font-size: ${props => props.theme.fontSizes.small};

  @media ${props => props.theme.breakpoints.desktop} {
    text-align: right;
  }
`