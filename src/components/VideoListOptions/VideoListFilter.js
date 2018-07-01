import React from 'react'

import styles from './_VideoListOptions.sass'
import { videoListFilterItems } from '../../helpers/video/videoListFilter'

const VideoListFilter = (props) => {
  const { currentFilter, setVideoListFilter } = props

  let filter = []
  for (let item in videoListFilterItems) {
    filter.splice(videoListFilterItems[item].index, 0, videoListFilterItems[item])
  }

  const hendleClick = (newFilter, e) => {
    e.nativeEvent.preventDefault()
    setVideoListFilter(newFilter)
  }

  return (
    <div className={styles['video-filter']}>
      <span className={styles['video-list-optionn-name']}>長度</span>
      <ul>
        {filter.map((item) => (
          <li key={item.id}>
            <a
              href='javascripts:;'
              onClick={hendleClick.bind(this, item.id)}
              className={item.id === currentFilter ? styles['active'] : null}
            >{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default VideoListFilter
