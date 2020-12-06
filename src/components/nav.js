import styled from 'styled-components'
import logo from '../images/logo.png'
export const Nav = () => {
  return (
    <NavWrapper>
      <Brand>
        <LogoWrapper>
          <img src={logo} alt='logo' />
        </LogoWrapper>
        <SiteTitle>
          flowerbox
        </SiteTitle>
      </Brand>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  background: ${props => props.theme.colors.primary};
  height: ${props => props.theme.sizes.xLarge};
  margin-bottom: ${props => props.theme.sizes.medium};
  display: flex;
  align-items: center;
  padding: ${props => props.theme.sizes.small};
`

const Brand = styled.div`
  display: flex;
`

const LogoWrapper = styled.div`
  width: ${props => props.theme.sizes.medium};
`

const SiteTitle = styled.h1`
  color: ${props => props.theme.colors.softWhite};
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.sizes.small};
  margin-left: ${props => props.theme.sizes.small};
`