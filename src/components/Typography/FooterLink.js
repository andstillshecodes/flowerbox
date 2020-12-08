import { Link } from 'react-router-dom'

export const FooterLink = ({ to, children }) => {
  return <Link to={to} style={linkStyles}>{children}</Link>
}

const linkStyles = {
  color: 'rgba(62,85,90,0.5)' // props.theme.colors.blackOpaque
}
