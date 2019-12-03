import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import  { MainStore } from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  MainStore,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>
, document.getElementById('root'))
