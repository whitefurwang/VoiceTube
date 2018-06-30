import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'

window.localStorage.setItem('videoAppLang', 'cht')

ReactDOM.render(
  <App />,
  document.getElementById('index')
)
