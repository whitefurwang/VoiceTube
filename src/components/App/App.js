import React, { Component } from 'react'
import request from 'superagent'
import Cookies from 'js-cookie'

import styles from './_App.sass'
import stylesVideoList from '../VideoList/_VideoList.sass'
import VideoListOptions from '../VideoListOptions/VideoListOptions'
import VideoListPlaceholder from '../VideoList/VideoListPlaceholder'
import VideoList from '../VideoList/VideoList'
import Caption from '../Caption/Caption'

window.videoApp = {
  default: {
    lang: 'cht',
    sort: 'PUBLISH',
    filter: 'FILTER_UNSET'
  }
}

const appDefault = window.videoApp.default
const sessionSort = window.sessionStorage.getItem('videoSort')
const sessionFilter = window.sessionStorage.getItem('videoFilter')

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      lang: Cookies.get('lang') || appDefault.lang,
      sort: sessionSort || appDefault.sort,
      filter: sessionFilter || appDefault.filter,
      videos: [],
      isLoaded: false,
      hasError: false
    }

    this.setVideoListSort = this.setVideoListSort.bind(this)
    this.setVideoListFilter = this.setVideoListFilter.bind(this)
    this.setCaption = this.setCaption.bind(this)
  }

  getVideoData () {
    const url = 'https://us-central1-lithe-window-713.cloudfunctions.net/fronted-demo'

    request
      .get(url)
      .end((err, res) => {
        if (err) {
          console.error(err)
          this.setState({ hasError: true })
        } else {
          this.setState({ videos: res.body.data })
        }
        this.setState({ isLoaded: true })
      })
  }

  componentDidMount () {
    this.getVideoData()
  }

  setVideoListSort (sort) {
    this.setState({ sort: sort })
    window.sessionStorage.setItem('videoSort', sort)
  }

  setVideoListFilter (filter) {
    this.setState({ filter: filter })
    window.sessionStorage.setItem('videoFilter', filter)
  }

  setCaption (lang) {
    this.setState({ lang: lang })
  }

  render () {
    const { lang, sort, filter, videos } = this.state
    return (
      <div className={styles['video-app']}>
        <VideoListOptions
          currentSort={sort}
          setVideoListSort={this.setVideoListSort}
          currentFilter={filter}
          setVideoListFilter={this.setVideoListFilter}
        />
        {
          !this.state.isLoaded &&
          <VideoListPlaceholder />
        }
        {
          this.state.isLoaded && this.state.hasError &&
          <div className={stylesVideoList['vidoe-list-msg']}>連線發生問題</div>
        }
        {
          this.state.isLoaded && !this.state.hasError &&
          <VideoList
            lang={lang}
            sort={sort}
            filter={filter}
            videos={videos}
          />
        }
        {
          this.state.isLoaded &&
          <Caption
            lang={lang}
            setCaption={this.setCaption}
          />
        }
      </div>
    )
  }
}

export default App
