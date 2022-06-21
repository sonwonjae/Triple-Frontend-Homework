import APPLE_BADGE_IMG from '../../assets/badge-apple4x.png'
import PLAY_STORE_IMG from '../../assets/play-store2x.png'
import { Award, Count } from '../../components'

import * as StatisticStyle from './Statistic.style'

interface StatisticProps {
  upriseAnimation: {
    duration: number
    delay: number
  }
}

function Statistic({ upriseAnimation }: StatisticProps) {
  return (
    <StatisticStyle.Container>
      <StatisticStyle.Wrapper
        duration={upriseAnimation.duration}
        delay={upriseAnimation.delay}
      >
        <StatisticStyle.BestAwardTriple>
          2021년 12월 기준
        </StatisticStyle.BestAwardTriple>
        <StatisticStyle.AchievementList>
          <li>
            <strong>
              <Count>{350}</Count>만 명
            </strong>
            의 여행자
          </li>
          <li>
            <strong>
              <Count>{21}</Count>만 개
            </strong>
            의 여행 리뷰
          </li>
          <li>
            <strong>
              <Count>{650}</Count>만 개
            </strong>
            의 여행 일정
          </li>
        </StatisticStyle.AchievementList>
        <StatisticStyle.AwardList>
          <li>
            <Award
              backgroundImgSrc={PLAY_STORE_IMG}
              when={2018}
              where="구글 플레이 스토어"
            >
              올해의 앱 최우수상 수상
            </Award>
          </li>
          <li>
            <Award
              backgroundImgSrc={APPLE_BADGE_IMG}
              when={2018}
              where="애플 앱스토어"
            >
              오늘의 여행앱 선정
            </Award>
          </li>
        </StatisticStyle.AwardList>
      </StatisticStyle.Wrapper>
    </StatisticStyle.Container>
  )
}

export default Statistic
