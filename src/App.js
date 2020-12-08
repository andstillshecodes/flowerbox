import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import 'normalize.css'
import 'fontsource-dm-sans'
import 'fontsource-open-sans'
import theme from './themes/theme'
import { Footer, Header, Products } from './components'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Products />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1320px;
  margin: auto;
  min-height: 100vh;
  padding: ${props => props.theme.sizes.medium};
`

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

  h2 {
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.primary};
    font-size: 1rem;
  }
`
