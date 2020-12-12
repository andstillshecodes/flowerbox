import styled from 'styled-components'

export const Banner = ({ banner, alt }) => {
  return banner
    ? (
      <BannerWrapper>
        {banner && <img src={banner} alt={alt || 'banner'} />}
      </BannerWrapper>)
    : null
}

const BannerWrapper = styled.div`

`
