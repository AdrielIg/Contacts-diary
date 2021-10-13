import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'

import { LoginScreen } from './components/auth/LoginScreen'

export const ContactApp = () => {
  return (
    <Provider store={store}>
      <LoginScreen />

    </Provider>
  )
}
