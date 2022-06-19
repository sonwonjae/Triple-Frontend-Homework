import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import Theme from './styles/theme'
import GlobalStyle from './styles/global-styles'

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
  </ThemeProvider>,
  document.getElementById('root'),
)
