import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import { addComment } from './actions';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const store = createStore(reducer,
    applyMiddleware(logger));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));
store.dispatch(addComment('3 komentarz'));
store.dispatch(addComment('4 komentarz'));
