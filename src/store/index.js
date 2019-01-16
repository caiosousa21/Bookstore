import {createStore, applyMiddleware, compose} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import logger from 'redux-logger' 

import reducers from './reducers'
import rootReducer from './reducers';


const persistConfig = {
    key:'root',
    storage,
}

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

const middlewares = [thunk, logger]

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(...middlewares),
))

const persistor = persistStore(store)

export {store, persistor}