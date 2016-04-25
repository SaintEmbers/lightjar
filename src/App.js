
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import configureStore from './store/configureStore'
console.log('yooooo')
const store = configureStore()
console.log('app store', syncHistoryWithStore)
const history = syncHistoryWithStore(browserHistory, store)
console.log('app history', history)
render(

  <Root store={store} history={history} />,
  document.getElementById('app')
)