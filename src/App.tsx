import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import './App.scss'
import routes from './constants/routes'
import Login from './pages/login'
import useAuthentication from './hooks/useAuthentication'
import Body from './components/body'
import Alert from './components/alert'
import Devices from './pages/devices'

const history = createBrowserHistory()

const App = () => {
  const { isLoggedIn } = useAuthentication()

  React.useEffect(() => {}, [])

  return (
    <Body>
      <Alert />
      <Router history={history}>
        <Switch>
          <>
            {isLoggedIn ? (
              <>
                <Route path={routes.devices.path} component={Devices} exact />
                <Route path={routes.root.path} component={Devices} exact />
              </>
            ) : (
              <>
                <Route path={routes.login.path} component={Login} exact />
                <Route path={routes.root.path} component={Login} exact />
              </>
            )}
          </>
        </Switch>
      </Router>
    </Body>
  )
}

export default App
