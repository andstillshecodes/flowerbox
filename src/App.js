import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { ProductContextProvider, CartContextProvider } from './contexts'

import 'normalize.css'
import 'fontsource-dm-sans'
import 'fontsource-open-sans'
import theme from './themes/theme'
import { AppLayout } from './layout'
import { Cart, Home } from './pages'

export default function App () {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <BrowserRouter>
            <AppLayout>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/cart' component={Cart} />
              </Switch>
            </AppLayout>
          </BrowserRouter>
        </ThemeProvider>
      </CartContextProvider>
    </ProductContextProvider>
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
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }

  h1 {
    color: ${props => props.theme.colors.secondary};
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.fontSizes.medium};
    text-transform: lowercase;
  }

  h2 {
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.primary};
    padding: ${props => props.theme.sizes.xSmall};
    font-size: ${props => props.theme.fontSizes.medium};
  }

  li {
    list-style-type: none;
    color: ${props => props.theme.colors.blackOpaque};
  }

  button {
    background: none;
    border: none;

    &:hover {
      cursor: pointer;
    }

    &:focus {
      outline: none;
    }
  }
`
