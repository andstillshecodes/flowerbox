import styled from 'styled-components'

export const CircleBtn = ({ onClick, children, ariaLabel }) => {
  return (
    <BtnWrapper onClick={onClick} ariaLabel={ariaLabel}>
      {children}
    </BtnWrapper>
  )
}

const BtnWrapper = styled.button`
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontSizes.large};
`
