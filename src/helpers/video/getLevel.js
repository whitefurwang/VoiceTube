const videoLevels = {
  1: '初級',
  2: '中級',
  3: '中高級',
  4: '高級'
}

const getLevel = (level) => {
  return videoLevels[level]
}

export default getLevel
