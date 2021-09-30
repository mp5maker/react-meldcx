import get from 'lodash/get'
import * as React from 'react'
import { AuthenticationContext } from '../redux/authentication/context'
import { AUTHENTICATION_ACTION_TYPE } from '../redux/authentication/reducer'

const useAuthentication = () => {
  const { state, dispatch }: any = React.useContext(AuthenticationContext)
  const isLoggedIn = get(state, 'isLoggedIn', false)
  const userInfo = get(state, 'userInfo', {})

  const logIn = React.useCallback((props: any) => {
    dispatch({
      type: AUTHENTICATION_ACTION_TYPE.LOG_IN,
      value: {
        isLoggedIn: true,
        ...props
      }
    })
  }, [])

  return { state, dispatch, isLoggedIn, userInfo, logIn }
}

export default useAuthentication
