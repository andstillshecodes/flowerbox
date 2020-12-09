import styled from 'styled-components'
import logo from '../../images/logo.png'

export const InlineBrand = () => {
  return (
    <BrandWrapper>
      <LogoWrapper>
        <img src={logo} alt='logo' />
      </LogoWrapper>
      <h1>Flowerbox</h1>
    </BrandWrapper>
  )
}

const BrandWrapper = styled.div`
  display: flex;
  align-items: center;
`

const LogoWrapper = styled.div`
  width: ${props => props.theme.sizes.medium};
`
