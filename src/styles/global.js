import { createGlobalStyle } from 'styled-components'
import { defaultValue } from './default'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
    background-color: ${defaultValue.colors.white};
    color: ${defaultValue.colors.black};
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
  p {
    font-size: ${defaultValue.size.small};
    line-height: ${defaultValue.size.medium};
  }
  a {
    text-decoration: none;
    color: ${defaultValue.colors.gray};
  }
`

export default GlobalStyles
