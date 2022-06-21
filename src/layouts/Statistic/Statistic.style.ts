import styled from 'styled-components'

import { UpriseInOrder } from '../../components'
import { image } from '../../constants'

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-width: ${({ theme }) => theme.layout.container.minWidth};
  background-color: ${({ theme }) => theme.color.background.white};
`
Container.displayName = 'Statistic.Container'

export const Wrapper = styled(UpriseInOrder)`
  position: relative;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.wrapper.maxWidth};
  background-color: ${({ theme }) => theme.color.background.white};
`
Wrapper.displayName = 'Statistic.Wrapper'

export const BestAwardTriple = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.layout.statistic.top};
  left: 0;
  width: ${({ theme }) => theme.layout.bestAwardTripple.width};
  height: ${({ theme }) => theme.layout.bestAwardTripple.height};
  box-sizing: border-box;
  background-size: ${({ theme }) =>
    `${theme.layout.bestAwardTripple.width} ${theme.layout.bestAwardTripple.height}`};
  background-repeat: no-repeat;
  background-image: url(${image.BEST_AWARD_TRIPLE});
  padding-top: ${({ theme }) => theme.layout.bestAwardTripple.padding.top};
  text-align: center;
  color: ${({ theme }) => theme.color.font.bright};
`
BestAwardTriple.displayName = 'Statistic.BestAwardTriple'

export const AchievementList = styled.ul`
  margin-left: ${({ theme }) => theme.layout.statistic.content.left};
  padding-top: ${({ theme }) => theme.layout.statistic.top};
  font-size: ${({ theme }) => theme.layout.achievementList.fontSize};
  letter-spacing: ${({ theme }) => theme.layout.achievementList.letterSpacing};
  color: ${({ theme }) => theme.color.font.default};

  & > li {
    margin-bottom: ${({ theme }) =>
      theme.layout.achievementList.item.margin.bottom};
  }
`
AchievementList.displayName = 'Statistic.AchievementList'

export const AwardList = styled.ul`
  margin-top: ${({ theme }) => theme.layout.awardList.margin.top};
  margin-left: ${({ theme }) => theme.layout.statistic.content.left};
  padding-bottom: ${({ theme }) => theme.layout.statistic.content.bottom};
  white-space: nowrap;

  & > li {
    display: inline-block;
  }
`
AwardList.displayName = 'Statistic.AwardList'
