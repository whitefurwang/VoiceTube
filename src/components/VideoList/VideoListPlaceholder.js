import React, { Component } from 'react'

import styles from './_VideoList.sass'
import VideoPlaceholder from '../Video/VideoPlaceholder'

class VideoListPlaceholder extends Component {
  render () {
    const videoPlacholders = Array.from({length: 4}, (v, i) => i)
    return (
      <ul className={styles['video-list-placeholder']}>
        { videoPlacholders.map(video => <VideoPlaceholder key={video} />) }
      </ul>
    )
  }
}

export default VideoListPlaceholder
