import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'normalize.css'
import 'fontsource-dm-sans'
import 'fontsource-open-sans'
import theme from './themes/theme'
import { Home } from './pages'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
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

  img {
    max-width: 100%;
  }

  h1 {
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.sizes.small};
    margin-left: ${props => props.theme.sizes.small};
    text-transform: lowercase;
  }

  h2 {
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.primary};
    padding: ${props => props.theme.sizes.xSmall};
    font-size: ${props => props.theme.sizes.small};
  }

  li {
    list-style-type: none;
    color: ${props => props.theme.colors.blackOpaque};
  }
`
