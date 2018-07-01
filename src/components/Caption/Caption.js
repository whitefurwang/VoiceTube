import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'

import styles from './_Caption.sass'
import objectToArray from '../../helpers/object/objectToArray'
import { videoCaptions } from '../../helpers/video/getCaption'

class Caption extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  static propTypes = {
    lang: PropTypes.string.isRequired,
    setCaption: PropTypes.func.isRequired
  }

  handleClick (e) {
    e.preventDefault
    const lang = e.target.getAttribute('lang')
    this.props.setCaption(lang)
    Cookies.set('lang', lang, { expires: 7 })
  }

  render () {
    const { lang } = this.props
    const captions = objectToArray(videoCaptions)
    return (
      <div className={styles['caption']}>
        <div className={styles['caption-title']}>字幕</div>
        <ul>
          {captions.map(caption =>
            <li key={caption.key}>
              <a
                href='javascript:;'
                lang={caption.key}
                onClick={this.handleClick}
                className={caption.key === lang ? styles['active'] : null}
              >
                {caption.value}
              </a>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default Caption
