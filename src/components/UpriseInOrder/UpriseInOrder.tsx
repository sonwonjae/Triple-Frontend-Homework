import { ReactElement, PropsWithChildren } from 'react'

import * as UpriseInOrderStyle from './UpriseInOrder.style'

interface UpriseInOrderProps {
  duration: number
  delay: number
  className?: string
  children: ReactElement[] | ReactElement
}

function UpriseInOrder({
  duration,
  delay,
  className,
  children,
}: PropsWithChildren<UpriseInOrderProps>) {
  const childrenList = Array.isArray(children) ? children : [children]
  const delayList = childrenList.map((_, index) => delay * index)

  return (
    <UpriseInOrderStyle.Wrapper
      duration={duration}
      delayList={delayList}
      className={className}
    >
      {children}
    </UpriseInOrderStyle.Wrapper>
  )
}

export default UpriseInOrder
