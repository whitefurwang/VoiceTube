import styles from './_VideoListOptions.sass'

import React from 'react'
import { videoListSortItems } from '../../helpers/video/videoListSort'

const VideoListSorter = (props) => {
  const { currentSort, setVideoListSort } = props

  let sort = []
  for (let item in videoListSortItems) {
    sort.splice(videoListSortItems[item].index, 0, videoListSortItems[item])
  }

  const hendleClick = (newSort, e) => {
    e.nativeEvent.preventDefault()
    setVideoListSort(newSort)
  }

  return (
    <div className={styles['video-sort']}>
      <span className={styles['video-list-optionn-name']}>排序</span>
      <ul>
        {sort.map((item) => (
          <li key={item.id}>
            <a
              href='javascripts:;'
              onClick={hendleClick.bind(this, item.id)}
              className={item.id === currentSort ? styles['active'] : null}
            >{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default VideoListSorter
