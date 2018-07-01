import React from 'react'

import styles from './_VideoListOptions.sass'
import VideoListSort from './VideoListSort'
import VideoListFilter from './VideoListFilter'

const VideoListOptions = (props) => {
  const {
    currentSort,
    setVideoListSort,
    currentFilter,
    setVideoListFilter
  } = props

  return (
    <div className={styles['video-list-options']}>
      <VideoListSort
        currentSort={currentSort}
        setVideoListSort={setVideoListSort}
      />
      <VideoListFilter
        currentFilter={currentFilter}
        setVideoListFilter={setVideoListFilter}
      />
    </div>
  )
}

export default VideoListOptions
