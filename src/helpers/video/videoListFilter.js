const videoListFilterItems = {
  FILTER_UNSET: {
    index: 0,
    id: 'FILTER_UNSET',
    text: '不限'
  },
  FILTER_LESS_THAN_4: {
    index: 1,
    id: 'FILTER_LESS_THAN_4',
    text: '4分鐘以下'
  },
  FILTER_4_TO_10: {
    index: 3,
    id: 'FILTER_4_TO_10',
    text: '4-10分鐘'
  },
  FILTER_MORE_THAN_10: {
    index: 4,
    id: 'FILTER_MORE_THAN_10',
    text: '超過10分鐘'
  }
}

const videoListFilter = (videos, filter) => {
  const {
    FILTER_UNSET,
    FILTER_LESS_THAN_4,
    FILTER_4_TO_10,
    FILTER_MORE_THAN_10
  } = videoListFilterItems

  switch (filter) {
    case FILTER_UNSET.id:
      return videos
    case FILTER_LESS_THAN_4.id:
      return videos.filter(video => {
        return video.duration / 60 <= 4
      })
    case FILTER_4_TO_10.id:
      return videos.filter(video => {
        return video.duration / 60 > 4 && video.duration / 60 <= 10
      })
    case FILTER_MORE_THAN_10.id:
      return videos.filter(video => {
        return video.duration / 60 > 10
      })
    default:
      return videos
  }
}

module.exports = {
  videoListFilterItems,
  videoListFilter
}
