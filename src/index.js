import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import createStore from './store'

const initialState = window.___INITIAL_STATE__

const store = createStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));

  if (module.hot) {
    module.hot.accept();
  }
