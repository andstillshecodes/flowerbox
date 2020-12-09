import styled from 'styled-components'
import { BlockBrand, FooterList } from '../../components'

export const Footer = () => {
  return (
    <FooterWrapper>
      <BlockBrand />
      <FooterList title='Customer Service' links={customerServiceLinks} />
      <FooterList title='Flowerbox' links={siteLinks} />
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

const customerServiceLinks = [
  {
    title: 'Satisfaction Commitment',
    url: '/'
  },
  {
    title: 'Delivery Policies',
    url: '/'
  },
  {
    title: 'Cancellations',
    url: '/'
  },
  {
    title: 'Return Policy',
    url: '/'
  }
]

const siteLinks = [
  {
    title: 'Terms of Service',
    url: '/'
  },
  {
    title: 'Privacy Policy',
    url: '/'
  },
  {
    title: 'Career Opportunities',
    url: '/'
  },
  {
    title: 'More Information',
    url: '/'
  }
]
