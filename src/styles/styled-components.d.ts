import 'styled-components'
import Theme from './theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: typeof Theme.color
    layout: typeof Theme.layout
  }
}
