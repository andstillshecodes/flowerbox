import styled from 'styled-components'

import {
  BlockBrand,
  FooterH2,
  Ul,
  FooterLi,
  FooterLink
} from '../../components'

export const Footer = () => {
  return (
    <FooterWrapper>
      <BlockBrand />
      <TitledListWrapper>
        <FooterH2>Customer Service</FooterH2>
        <Ul>
          <FooterLi>
            <FooterLink to='/'>
              Satisfaction Commitment
            </FooterLink>
          </FooterLi>
          <FooterLi>
            <FooterLink to='/'>
              Delivery Policies
            </FooterLink>
          </FooterLi>
          <FooterLi>
            <FooterLink to='/'>
              Cancellations
            </FooterLink>
          </FooterLi>
          <FooterLi>
            <FooterLink to='/'>
              Return Policy
            </FooterLink>
          </FooterLi>
        </Ul>
      </TitledListWrapper>
      <TitledListWrapper>
        <FooterH2>Flowerbox</FooterH2>
        <Ul>
          <FooterLi>
            <FooterLink to='/'>
              Terms of Service
            </FooterLink>
          </FooterLi>
          <FooterLi>
            <FooterLink to='/'>
              Privacy Policy
            </FooterLink>
          </FooterLi>
          <FooterLi>
            <FooterLink to='/'>
              Career Opportunities
            </FooterLink>
          </FooterLi>
          <FooterLi>
            <FooterLink to='/'>
              More Information
            </FooterLink>
          </FooterLi>
        </Ul>
      </TitledListWrapper>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background: ${props => props.theme.colors.gray};
  padding: ${props => props.theme.sizes.small};

  @media ${props => props.theme.breakpoints.desktop} {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
`

const TitledListWrapper = styled.div`
  padding: ${props => props.theme.sizes.small};

  @media ${props => props.theme.breakpoints.desktop} {
    border-right: 1px solid ${props => props.theme.colors.detail};
  }
`