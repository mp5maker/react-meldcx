import { DarkMode, LightMode } from '@mui/icons-material'
import { Box, useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { createBrowserHistory } from 'history'
import get from 'lodash/get'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Route, Router, Switch } from 'react-router-dom'
import './App.scss'
import Alert from './components/alert'
import Body from './components/body'
import Button from './components/button'
import PrivateRoute from './components/privateRoute'
import routes from './constants/routes'
import useLocalTheme from './hooks/useLocalTheme'
import Devices from './pages/devices'
import Login from './pages/login'

const browserHistory = createBrowserHistory()

const useStyles: any = makeStyles((theme: any) => ({
  topContent: {
    position: 'absolute',
    top: 24,
    right: 24
  }
}))

const App = () => {
  const { t, i18n } = useTranslation()
  const classes = useStyles()
  const theme = useTheme()
  const { state, setTheme }: any = useLocalTheme()
  const currentTheme = get(state, 'theme', '')

  const handleTheme = (value: string) => {
    setTheme(value)
  }

  const handleLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  const TopContent = (
    <Box className={classes.topContent}>
      <Button
        className={classes.button}
        variant={i18n.language === 'en' ? 'contained' : 'outlined'}
        style={{ marginRight: theme.spacing(2) }}
        onClick={() => handleLanguage('en')}
      >
        {t('ENGLISH')}
      </Button>
      <Button
        className={classes.button}
        variant={i18n.language === 'zh' ? 'contained' : 'outlined'}
        style={{ marginRight: theme.spacing(2) }}
        onClick={() => handleLanguage('zh')}
      >
        {t('MANDARIN')}
      </Button>
      <Button
        className={classes.button}
        variant={currentTheme === 'light' ? 'contained' : 'outlined'}
        style={{ marginRight: theme.spacing(2) }}
        onClick={() => handleTheme('light')}
      >
        <LightMode />
      </Button>
      <Button
        className={classes.button}
        variant={currentTheme === 'dark' ? 'contained' : 'outlined'}
        style={{ marginRight: theme.spacing(2) }}
        onClick={() => handleTheme('dark')}
      >
        <DarkMode />
      </Button>
    </Box>
  )

  return (
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
      {TopContent}
    </Body>
  )
}
export default App
