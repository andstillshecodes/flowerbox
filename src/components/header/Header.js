import styled from 'styled-components'

export const Header = ({ banner, alt }) => {
  return banner
    ? (
      <HeaderWrapper>
        {banner && <img src={banner} alt={alt || 'banner'} />}
      </HeaderWrapper>)
    : null
}

const HeaderWrapper = styled.header`

`
