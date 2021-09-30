import get from 'lodash/get'

export const initialState: any = {
  theme: 'dark'
}

export const THEME_ACTION_TYPE = {
  CHANGE_THEME: 'AUTHENTICATION_LOG_IN'
}

const reducer = (
  state = initialState,
  action: { [x: string]: any; type: string }
) => {
  const type: any = get(action, 'type', '')
  const value: any = get(action, 'value', {})

  switch (type) {
    case THEME_ACTION_TYPE.CHANGE_THEME:
      return {
        ...state,
        theme: value
      }
    default:
      return state
  }
}

export default reducer
