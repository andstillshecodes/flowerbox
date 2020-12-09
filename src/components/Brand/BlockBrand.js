import React from 'react'
import styled from 'styled-components'

import logo from '../../images/logo.png'
import { FaTwitter, FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import { BrandH2 } from '..'

export const BlockBrand = () => {
  return (
    <BrandWrapper>
      <LogoWrapper>
        <img src={logo} alt='logo' />
      </LogoWrapper>
      <BrandH2>Flowerbox / EST.2019</BrandH2>
      <SocialIcons>
        <SocialIconWrapper><FaTwitter /></SocialIconWrapper>
        <SocialIconWrapper><FaFacebookSquare /></SocialIconWrapper>
        <SocialIconWrapper><FaInstagram /></SocialIconWrapper>
      </SocialIcons>
    </BrandWrapper>
  )
}

const BrandWrapper = styled.div`
  padding: ${props => props.theme.sizes.small};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.breakpoints.tablet} {
    padding: ${props => props.theme.sizes.small} ${props => props.theme.sizes.xLarge};
  }
`

const LogoWrapper = styled.div`
  width: ${props => props.theme.sizes.xxLarge};
`

const SocialIcons = styled.div`
  color: ${props => props.theme.colors.primary};
`

const SocialIconWrapper = styled.span`
  margin: 0 ${props => props.theme.sizes.xxSmall};

  &:hover {
    cursor: pointer;
  }
`
