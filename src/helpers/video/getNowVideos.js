import { videoListSort } from './videoListSort'
import { videoListFilter } from './videoListFilter'

const getNowVideos = (sort, filter) =>
  (videos) => videoListSort(videoListFilter(videos, filter), sort)

export default getNowVideos
