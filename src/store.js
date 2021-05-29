import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from './reducer';

const configureStore = (preloadedState) => {
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(thunk, createLogger()))
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducer', () => {
            store.replaceReducer(rootReducer)
        })
    }

    return store;
};

export default configureStore

