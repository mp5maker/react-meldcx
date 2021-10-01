import get from 'lodash/get'

export interface TInitialStateProps {
  isLoggedIn: boolean
  userInfo: {
    [x: string]: string
  } | null
}

export const initialState: TInitialStateProps = {
  isLoggedIn: false,
  userInfo: null
}

export const AUTHENTICATION_ACTION_TYPE = {
  LOG_IN: 'AUTHENTICATION_LOG_IN',
  LOG_OUT: 'AUTHENTICATION_LOG_OUT'
}

const reducer = (
  state = initialState,
  action: { [x: string]: any; type: string }
) => {
  const type: string = get(action, 'type', '')
  const value: any = get(action, 'value', {})

  switch (type) {
    case AUTHENTICATION_ACTION_TYPE.LOG_IN:
      return {
        ...state,
        userInfo: value,
        isLoggedIn: true
      }
    case AUTHENTICATION_ACTION_TYPE.LOG_OUT:
      return {
        ...state,
        userInfo: null,
        isLoggedIn: false
      }
    default:
      return state
  }
}

export default reducer
