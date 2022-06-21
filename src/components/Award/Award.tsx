import { PropsWithChildren } from 'react'

import * as AwardStyle from './Award.style'

interface AwardProps {
  backgroundImgSrc: string
  when: number
  where: string
}

function Award({
  backgroundImgSrc,
  when,
  where,
  children,
}: PropsWithChildren<AwardProps>) {
  return (
    <AwardStyle.SignBoard backgroundImgSrc={backgroundImgSrc}>
      {when} {where}
      <br />
      {children}
    </AwardStyle.SignBoard>
  )
}

export default Award
