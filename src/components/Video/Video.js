import styles from './_Video.sass'

import React from 'react'
import PropTypes from 'prop-types'
import secToMin from '../../helpers/string/secToMin'
import { getCaption } from '../../helpers/video/getCaption'
import getLevel from '../../helpers/video/getLevel'

const Video = (props) => {
  const {
    id,
    thumbnail,
    title,
    views,
    duration,
    level,
    captions,
    lang
  } = props

  return (
    <li className={styles['video-item']}>
      <a title={title} href='javascript:;' onClick={e => { e.preventDefault() }}>
        <div className={styles['video-thumbnail']}>
          <img src='./assets/images/blank.png' alt={title} style={{backgroundImage: `url(${thumbnail})`}} />
          <div className={styles['video-duration']}>{secToMin(duration)}</div>
        </div>
        <div className={styles['video-title']}>{title}</div>
        <div className={styles['video-views']}>
          <i className={styles['material-icons']}>headset</i>
          <span>{views}</span>
        </div>
        <div className={styles['video-tags']}>
          <div className={styles['video-caption']}>{getCaption(lang, captions)}</div>
          <div className={styles['video-level']}>{getLevel(level)}</div>
        </div>
      </a>
    </li>
  )
}

Video.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  collectCount: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  publish: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  captions: PropTypes.array.isRequired
}

export default Video
