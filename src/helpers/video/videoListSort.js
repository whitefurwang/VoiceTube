const videoListSortItems = {
  PUBLISH: {
    index: 0,
    id: 'PUBLISH',
    text: '發佈時間'
  },
  VIEWS: {
    index: 1,
    id: 'VIEWS',
    text: '觀看次數'
  },
  COLLECT_COUNT: {
    index: 2,
    id: 'COLLECT_COUNT',
    text: '收藏次數'
  }
}

const videoListSort = (videos, sort) => {
  const {
    PUBLISH,
    VIEWS,
    COLLECT_COUNT
  } = videoListSortItems

  switch (sort) {
    case PUBLISH.id:
      return videos.sort((a, b) => {
        return a.publish < b.publish
      })
    case VIEWS.id:
      return videos.sort((a, b) => {
        return a.views < b.views
      })
    case COLLECT_COUNT.id:
      return videos.sort((a, b) => {
        return a.collectCount < b.collectCount
      })
    default:
      return videos
  }
}

module.exports = {
  videoListSortItems,
  videoListSort
}
