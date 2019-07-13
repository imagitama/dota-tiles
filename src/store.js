import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from './ducks'
import { middleware as analyticsMiddleware } from './analytics'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [thunk, routerMiddleware(history), analyticsMiddleware]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default () => {
  const store = createStore(
    connectRouter(history)(persistedReducer),
    initialState,
    composedEnhancers
  )

  const persistor = persistStore(store)

  return { store, persistor }
}
