import React from 'react'
import styled from 'styled-components'

import logo from '../../images/logo.png'

export const Brand = () => {
  return (
    <BrandWrapper>
      <LogoWrapper>
        <img src={logo} alt='logo' />
      </LogoWrapper>
      <SiteTitle>Flowerbox / EST.2019</SiteTitle>
    </BrandWrapper>
  )
}

const BrandWrapper = styled.div`
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