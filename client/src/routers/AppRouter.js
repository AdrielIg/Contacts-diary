import React, { useCallback, useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios'

import { AuthRouter } from './AuthRouter';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { ContactScreen } from '../components/contactBoard/ContactScreen';
import { isUserConnected, login } from '../actions/auth';

export const AppRouter = () => {

  const dispatch = useDispatch()

  const [isLoggedIn, setIsLoggedIn] = useState(true)


  useEffect(() => {
    dispatch(isUserConnected(setIsLoggedIn))
    console.log('Is lloged in EFFECT', isLoggedIn)

  }, [dispatch, isLoggedIn])

  console.log('Is lloged in', isLoggedIn)

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path='/auth'
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            exact
            path='/'
            component={ContactScreen}
            isAuthenticated={isLoggedIn}
          />
          <Redirect to='/auth/login' />
        </Switch>
      </div>

    </Router>
  )
}
