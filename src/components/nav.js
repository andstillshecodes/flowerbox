import styled from 'styled-components'
import logo from '../images/logo.png'
export const Nav = () => {
  return (
    <NavWrapper>
      <LogoWrapper>
        <img src={logo} alt='logo' />
      </LogoWrapper>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`

`

const LogoWrapper = styled.div`
  width: 50px;
`