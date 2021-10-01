import get from 'lodash/get'
import * as React from 'react'
import { useHistory } from 'react-router'
import routes from '../constants/routes'
import settings from '../constants/settings'
import { AuthenticationContext } from '../redux/authentication/context'
import { AUTHENTICATION_ACTION_TYPE } from '../redux/authentication/reducer'
import useLocalStorage from './useLocalStorage'

const useAuthentication = () => {
  const { state, dispatch }: any = React.useContext(AuthenticationContext)
  const { removeLocalStorage } = useLocalStorage()
  const isLoggedIn = get(state, 'isLoggedIn', false)
  const userInfo = get(state, 'userInfo', {})
  const history = useHistory()

  const logIn = React.useCallback((props: any) => {
    dispatch({
      type: AUTHENTICATION_ACTION_TYPE.LOG_IN,
      value: {
        isLoggedIn: true,
        ...props
      }
    })
  }, [])

  const logOut = React.useCallback(() => {
    dispatch({
      type: AUTHENTICATION_ACTION_TYPE.LOG_OUT,
      value: {
        isLoggedIn: false,
        userInfo: {}
      }
    })
    removeLocalStorage({ key: settings.ACCESS_TOKEN })
    history.push(routes.login.path)
  }, [])

  return { state, dispatch, isLoggedIn, userInfo, logIn, logOut }
}

export default useAuthentication
