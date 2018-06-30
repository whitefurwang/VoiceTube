import styles from './_Video.sass'

import React from 'react'

const VideoPlaceholder = () => {
  return (
    <li className={styles['video-item']}>
      <div className={styles['video-item-placeholder']}>
        <div className={styles['video-thumbnail']} />
        <div className={styles['video-title']} />
        <div className={styles['video-views']}>
          <i className={styles['material-icons']}>headset</i>
          <span />
        </div>
        <div className={styles['video-tags']}>
          <div className={styles['video-caption']} />
          <div className={styles['video-level']} />
        </div>
      </div>
    </li>
  )
}

export default VideoPlaceholder
