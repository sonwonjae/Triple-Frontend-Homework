import styled from 'styled-components'

export const SignBoard = styled.div<{ backgroundImgSrc: string }>`
  height: ${({ theme }) => theme.layout.award.signBoard.height};
  margin-right: ${({ theme }) => theme.layout.award.margin.right};
  padding-top: ${({ theme }) => theme.layout.award.padding.top};
  padding-bottom: ${({ theme }) => theme.layout.award.padding.bottom};
  padding-left: ${({ theme }) => theme.layout.award.padding.left};
  background-image: url(${({ backgroundImgSrc }) => backgroundImgSrc});
  background-position: left top;
  background-size: ${({ theme }) =>
    `${theme.layout.award.signBoard.width} ${theme.layout.award.signBoard.height}`};
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.color.font.light};
  font-weight: bold;
  font-size: ${({ theme }) => theme.layout.award.fontSize};
  line-height: ${({ theme }) => theme.layout.award.lineHeight};
`
