import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'

const middleware = applyMiddleware(thunk, logger)

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export default () => {
  const store = createStore(persistedReducer, middleware)
  const persistor = persistStore(store)
  return { persistor, store}
}
