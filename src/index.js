import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/app'
import createStore from './store'

const initialState = window.___INITIAL_STATE__

ReactDOM.render(
  <Provider store={createStore(initialState)}>
    <App>
      <div>Child</div>
    </App>
  </Provider>
  , document.querySelector('.container'))

if (module.hot) {
  module.hot.accept()
}
