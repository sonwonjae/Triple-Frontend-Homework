import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import Theme from './styles/theme'
import GlobalStyle from './styles/global-styles'
import { Homework } from './pages'

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Homework />
  </ThemeProvider>,
  document.getElementById('root'),
)
