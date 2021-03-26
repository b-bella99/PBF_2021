import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { Provider } from 'react-redux';
import GenericContainer from './GenericContainer/GenericContainerDemo.jsx';
import LoaderDemo from './LoadDemo/LoaderDemo'

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);
/* const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => 
f)(createStore)(MainReducer) */

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

ReactDOM.render(
  <Provider store={store}>
  <LoaderDemo />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
