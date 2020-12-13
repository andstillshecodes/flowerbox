import styled from 'styled-components'

export const CircleBtn = ({ onClick, children }) => {
  return (
    <BtnWrapper onClick={onClick}>
      {children}
    </BtnWrapper>
  )
}

const BtnWrapper = styled.button`
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontSizes.large};
`
