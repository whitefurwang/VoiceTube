import styles from './_App.sass'
import stylesVideoList from '../VideoList/_VideoList.sass'

import React, { Component } from 'react'
import request from 'superagent'

import VideoListOptions from '../VideoListOptions/VideoListOptions'
import VideoListPlaceholder from '../VideoList/VideoListPlaceholder'
import VideoList from '../VideoList/VideoList'

const localLang = window.localStorage.getItem('videoAppLang')
const sessionSort = window.sessionStorage.getItem('videoSort')
const sessionFilter = window.sessionStorage.getItem('videoFilter')

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      lang: localLang || 'cht',
      sort: sessionSort || 'PUBLISH',
      filter: sessionFilter || 'FILTER_UNSET',
      videos: [],
      isLoaded: false,
      hasError: false
    }

    this.setVideoListSort = this.setVideoListSort.bind(this)
    this.setVideoListFilter = this.setVideoListFilter.bind(this)
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
      </div>
    )
  }
}

export default App
