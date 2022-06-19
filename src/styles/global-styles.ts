import styledReset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${styledReset}

  body {
    background-color: ${({ theme }) => theme.color.background.lightGray};
  }
  
  strong {
    font-weight: bold;
  }
`

export default GlobalStyle
