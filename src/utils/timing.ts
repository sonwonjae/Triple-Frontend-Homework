export const easeOut = (progress: number) => {
  return 1 - Math.pow(1 - progress, 5)
}
