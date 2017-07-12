import React from 'react'
import ReactDOM from 'react-dom'
import {ConnectedRouter} from 'connected-react-router'
import App from './src/components/app/app.jsx'
import {
  Route
} from 'react-router-dom'
import {
  Provider
} from 'react-redux'
import store, {
  history
} from './src/store.js'

import './src/styles/index.css'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route component={App}/>
    </ConnectedRouter>
  </Provider>, document.getElementById('root'))