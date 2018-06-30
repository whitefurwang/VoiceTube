import paddingLeft from './paddingLeft'

const secToMin = (duration) => {
  const min = paddingLeft(Math.floor(duration / 60).toString(), 2)
  const sec = paddingLeft(Math.floor(duration % 60).toString(), 2)

  return `${min}:${sec}`
}

export default secToMin
