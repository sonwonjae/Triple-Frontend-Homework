import colorChip from './colorChip'
import fontSizeChip from './fontSizeChip'

const Theme = {
  color: {
    font: {
      bright: colorChip.shadow[70],
      light: colorChip.shadow[80],
      default: colorChip.black,
    },
    background: {
      white: colorChip.white,
      lightGray: colorChip.gray[100],
    },
  },
  layout: {
    wrapper: {
      maxWidth: '1040px',
    },
    container: {
      minWidth: '1200px',
    },
    statistic: {
      top: '150px',
      content: {
        left: '623px',
        bottom: '140px',
      },
    },
    bestAwardTripple: {
      width: '400px',
      height: '338px',
      padding: {
        top: '280px',
      },
    },
    achievementList: {
      letterSpacing: '-1px',
      fontSize: fontSizeChip.large,
      item: {
        margin: {
          bottom: '20px',
        },
      },
    },
    awardList: {
      margin: {
        top: '50px',
      },
    },
    award: {
      signBoard: {
        width: '54px',
        height: '54px',
      },
      margin: {
        right: '39px',
      },
      padding: {
        top: '5px',
        bottom: '5px',
        left: '62px',
      },
      fontSize: fontSizeChip.small,
      lineHeight: '22px',
    },
  },
}

export default Theme
