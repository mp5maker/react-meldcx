import { createBrowserHistory } from 'history'
import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import './App.scss'
import Alert from './components/alert'
import Body from './components/body'
import PrivateRoute from './components/privateRoute'
import routes from './constants/routes'
import Devices from './pages/devices'
import Login from './pages/login'

const browserHistory = createBrowserHistory()

const App = () => (
  <Body>
    <Alert />
    <Router history={browserHistory}>
      <Switch>
        <Route path={routes.login.path} component={Login} exact />
        <Route path={routes.root.path} component={Login} exact />
        <PrivateRoute>
          <Route path={routes.devices.path} component={Devices} exact />
        </PrivateRoute>
      </Switch>
    </Router>
  </Body>
)
export default App
