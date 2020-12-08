import styled from 'styled-components'
import logo from '../images/logo.png'

export const Footer = () => {
  return (
    <FooterWrapper>
      <Brand>
        <LogoWrapper>
          <img src={logo} alt='logo' />
        </LogoWrapper>
        <SiteTitle>Flowerbox / EST.2019</SiteTitle>
      </Brand>

      <Links>
        <CustomerServiceWrapper>
          <H2>Customer Service</H2>
          <Ul>
            <Li>Satisfaction Commitment</Li>
            <Li>Delivery Policies</Li>
            <Li>Cancellations</Li>
            <Li>Return Policy</Li>
          </Ul>
        </CustomerServiceWrapper>

        <FlowerboxWrapper>
          <H2>Flowerbox</H2>
          <Ul>
            <Li>Terms of Service</Li>
            <Li>Privacy Policy</Li>
            <Li>Career Opportunities</Li>
            <Li>More Information</Li>
          </Ul>
        </FlowerboxWrapper>
      </Links>
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

const Links = styled.div`
  @media ${props => props.theme.breakpoints.desktop} {
    display: flex;
  }
`

const CustomerServiceWrapper = styled.div`

`

const H2 = styled.h2`
  text-align: center;
  text-transform: lowercase;

  @media ${props => props.theme.breakpoints.desktop} {
    text-align: right;
  }
`

const FlowerboxWrapper = styled.div`

`

const Ul = styled.ul`
  list-style: none;
  text-align: center;
`

const Li = styled.li`
  color: ${props => props.theme.colors.blackOpaque};
  text-transform: uppercase;

  @media ${props => props.theme.breakpoints.desktop} {
    text-align: right;
  }
`

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LogoWrapper = styled.div`
  width: ${props => props.theme.sizes.xxLarge};
`

const SiteTitle = styled.h2`
  text-transform: uppercase;
  
`
