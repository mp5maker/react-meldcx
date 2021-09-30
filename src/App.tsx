import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import './App.scss'
import routes from './constants/routes'
import Login from './pages/login'
import useAuthentication from './hooks/useAuthentication'

const history = createBrowserHistory()

const App = () => {
  const { isLoggedIn } = useAuthentication()

  console.log(isLoggedIn)

  React.useEffect(() => {}, [])

  return (
    <Router history={history}>
      <Switch>
        <Route path={routes.login.path} component={Login} />
      </Switch>
    </Router>
  )
}

export default App
