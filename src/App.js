import { createGlobalStyle, ThemeProvider } from 'styled-components'

import 'normalize.css'
import theme from './themes/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

    </ThemeProvider>
  )
}


const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  html {
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.black};
  }

  a {
    text-decoration: none;
  }
`