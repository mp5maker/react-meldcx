import { DarkMode, LightMode } from '@mui/icons-material'
import TranslateIcon from '@mui/icons-material/Translate'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
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
import useAuthentication from './hooks/useAuthentication'
import useLocalTheme from './hooks/useLocalTheme'
import Devices from './pages/devices'
import Login from './pages/login'

const browserHistory = createBrowserHistory()

const useStyles: any = makeStyles((_theme: any) => ({
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
  const [showlanguage, setShowLanguage] = React.useState<any>(null)
  const { isLoggedIn } = useAuthentication()

  const openLanguage = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (showlanguage) {
      setShowLanguage(null)
    } else setShowLanguage(event.currentTarget)
  }

  const closeLanguage = (language: string) => {
    if (['en', 'zh'].includes(language)) i18n.changeLanguage(language)
    setShowLanguage(null)
  }

  const handleTheme = (value: string) => {
    setTheme(value)
  }

  const TopContent = (
    <Box className={classes.topContent}>
      <Button
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={openLanguage}
      >
        <TranslateIcon />
      </Button>
      <Menu
        id="language-menu"
        anchorEl={showlanguage}
        keepMounted
        open={Boolean(showlanguage)}
        onClose={closeLanguage}
      >
        <MenuItem onClick={() => closeLanguage('en')}>{t('ENGLISH')}</MenuItem>
        <MenuItem onClick={() => closeLanguage('zh')}>{t('MANDARIN')}</MenuItem>
      </Menu>
      {isLoggedIn ? (
        <></>
      ) : (
        <>
          <Button
            className={classes.button}
            variant={currentTheme === 'light' ? 'contained' : 'outlined'}
            style={{ margin: theme.spacing(1) }}
            onClick={() => handleTheme('light')}
          >
            <LightMode />
          </Button>
          <Button
            className={classes.button}
            variant={currentTheme === 'dark' ? 'contained' : 'outlined'}
            style={{ margin: theme.spacing(1) }}
            onClick={() => handleTheme('dark')}
          >
            <DarkMode />
          </Button>
        </>
      )}
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
