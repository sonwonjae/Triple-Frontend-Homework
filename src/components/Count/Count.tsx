import { useEffect, useState } from 'react'

import { timing } from '../../utils'

interface CountProps {
  duration: number
  children: number
}

function Count({ duration, children }: CountProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (progress < 1) {
      const frameBudget = 1000 / 60

      setTimeout(() => {
        setProgress(progress + frameBudget / duration)
      }, frameBudget)
    }
  }, [duration, progress])

  return <>{Math.round(children * timing.easeOut(progress))}</>
}

export default Count
