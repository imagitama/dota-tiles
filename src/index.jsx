import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import firebase from 'firebase/app'
import ReactReduxFirebaseProvider from 'react-redux-firebase/lib/ReactReduxFirebaseProvider'
import { PersistGate } from 'redux-persist/integration/react'
import createStore, { history } from './store'
import App from './app'

const target = document.querySelector('#root')

const { store, persistor } = createStore()

const rrfProps = {
  firebase,
  config: {
    userProfile: 'users'
  },
  dispatch: store.dispatch
}

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </ReactReduxFirebaseProvider>
    </ConnectedRouter>
  </Provider>,
  target
)
