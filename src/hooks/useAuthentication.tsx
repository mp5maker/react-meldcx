import get from 'lodash/get'
import * as React from 'react'
import { AuthenticationContext } from '../redux/authentication/context'

const useAuthentication = () => {
  const { state, dispatch } = React.useContext(AuthenticationContext)
  const isLoggedIn = get(state, 'isLoggedIn', false)
  const userInfo = get(state, 'userInfo', {})

  return { state, dispatch, isLoggedIn, userInfo }
}

export default useAuthentication
