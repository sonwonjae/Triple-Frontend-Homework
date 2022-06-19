import { ReactElement, PropsWithChildren } from 'react'
import styled, { keyframes } from 'styled-components'

const float = keyframes`
0% {
  transform: translateY(10px);
  opacity: 0;
} 
100% {
  transform: translateY(0);
  opacity: 1;
}
`

export const SequenceAnimationWrapper = styled.div<{
  duration: number
  delay: number
  children: ReactElement<PropsWithChildren>[]
}>`
  & > * {
    animation-name: ${float};
    animation-duration: ${({ duration }) => duration}ms;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
    transform: translateY(10px);
    opacity: 0;

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
SequenceAnimationWrapper.displayName = 'Float.SequenceAnimationWrapper'
