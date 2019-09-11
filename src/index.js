import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './redux/reducer';
import {addComment} from './redux/actions';
import './css/index.css';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));
store.dispatch(addComment('trzeci komentarz'));

serviceWorker.unregister();
