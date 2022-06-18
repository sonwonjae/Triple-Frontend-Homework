import { ReactElement, PropsWithChildren } from 'react'
import styled, { keyframes } from 'styled-components'

const float = keyframes`
0% {
  transform: translateY(30%);
  opacity: 0;
} 100% {
  transform: translateY(0);
  opacity: 1;
}
`

export const SequenceAnimationContainer = styled.div<{
  duration: number
  delay: number
  children: ReactElement<PropsWithChildren>[]
}>`
  & > * {
    animation-name: ${float};
    animation-duration: ${({ duration }) => duration}ms;
    animation-fill-mode: forwards;

    ${({ delay, children }) =>
      children.map(
        (_, index) => `
          &:nth-child(${index + 1}) {
            animation-delay: ${delay * index}ms;
          }
      `,
      )}
  }
`
