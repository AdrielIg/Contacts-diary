import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { ContactScreen } from '../components/contactBoard/ContactScreen';

export const AppRouter = () => {

  const isLoggedIn = false

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
        </Switch>
      </div>

    </Router>
  )
}
