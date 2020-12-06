import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import 'normalize.css'
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
  min-height: 100vh;
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
`