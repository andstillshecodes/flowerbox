import React from 'react'
import styled from 'styled-components'

import logo from '../../images/logo.png'
import {
  H1
} from '../../components'

export const InlineBrand = () => {
  return (
    <BrandWrapper>
      <LogoWrapper>
        <img src={logo} alt='logo' />
      </LogoWrapper>
      <H1>Flowerbox</H1>
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
