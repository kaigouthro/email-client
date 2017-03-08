import React from 'react';
import ReactDOM from 'react-dom';

import Immutable from 'immutable';
import {HashRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';

import App from './App';
import reducers from './reducers';

const logger = createLogger({
    stateTransformer: (state) => {
        let newState = {};

        for (var i of Object.keys(state)) {
            if (Immutable.Iterable.isIterable(state[i])) {
                newState[i] = state[i].toJS();
            } else {
                newState[i] = state[i];
            }
        };

        return newState;
    }
});
const store = createStore(reducers, applyMiddleware(logger));

const app = <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>

ReactDOM.render(app, document.getElementById('root'));
