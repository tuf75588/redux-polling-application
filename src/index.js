import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import './index.css';
import App from './components/App';
import middleware from './middleware';
import { handleInitialData } from './actions/shared';
const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App dispatch={store.dispatch} />
  </Provider>,
  document.getElementById('root')
);
