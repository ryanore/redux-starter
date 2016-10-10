import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import App from './components/app'
import createStore from './store'

const initialState = window.___INITIAL_STATE__

ReactDOM.render(
  <Provider store={createStore(initialState)}>
    <App />
  </Provider>
  , document.querySelector('.container'))

if (module.hot) {
  module.hot.accept()
}
