import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'Store/modules';
import { createLogger } from 'redux-logger';
import reduxthunk from 'redux-thunk';

const logger = createLogger();

const store = createStore(reducers, applyMiddleware(logger, reduxthunk));

ReactDOM.render(<Provider store={store}><Root /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA