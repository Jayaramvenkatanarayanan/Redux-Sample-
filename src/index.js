import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './Reducers'

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <BrowserRouter>
    <Provider store={Store} >
     <App/>
   </Provider></BrowserRouter>, document.getElementById('root'));
