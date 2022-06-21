import { ReactElement } from 'react'
import styled, { keyframes } from 'styled-components'

const uprise = keyframes`
0% {
  transform: translateY(10px);
  opacity: 0;
} 
100% {
  transform: translateY(0);
  opacity: 1;
}
`

export const Wrapper = styled.div<{
  duration: number
  delayList: number[]
  children: ReactElement[] | ReactElement
}>`
  & > * {
    animation-name: ${uprise};
    animation-duration: ${({ duration }) => duration}ms;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
    transform: translateY(10px);
    opacity: 0;

    ${({ delayList }) =>
      delayList.map(
        (delay, index) => `
          &:nth-child(${index + 1}) {
            animation-delay: ${delay}ms;
          }
      `,
      )}
  }
`
Wrapper.displayName = 'Wrapper'
