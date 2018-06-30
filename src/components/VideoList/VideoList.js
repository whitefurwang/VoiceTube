import styles from'./_VideoList.sass'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Video from '../Video/Video'
import getNowVideos from '../../helpers/video/getNowVideos'

class VideoList extends Component {
  static propTypes = {
    videos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      views: PropTypes.number.isRequired,
      collectCount: PropTypes.number.isRequired,
      duration: PropTypes.number.isRequired,
      publish: PropTypes.number.isRequired,
      level: PropTypes.number.isRequired,
      captions: PropTypes.array.isRequired
    }).isRequired).isRequired
  }

  render () {
    const { lang, sort, filter, videos } = this.props
    const nowVideos = getNowVideos(sort, filter)(videos)

    if (nowVideos.length === 0) {
      return <div className={styles['vidoe-list-msg']}>沒有篩選結果</div>
    } else {
      return (
        <ul className={styles['video-list']}>
          { nowVideos.map(video => <Video key={video.id} lang={lang} {...video} />) }
        </ul>
      )
    }
  }
}

export default VideoList
