import get from 'lodash/get'

export const initialState: any = {
  isVisible: false,
  severity: 'error',
  text: ''
}

export const ALERT_ACTION_TYPE = {
  SET_ALERT: 'ALERT_SET_ALERT'
}

const reducer = (
  state = initialState,
  action: { [x: string]: any; type: string }
) => {
  const type: any = get(action, 'type', '')
  const value: any = get(action, 'value', {})

  switch (type) {
    case ALERT_ACTION_TYPE.SET_ALERT:
      return {
        ...state,
        ...value
      }
    default:
      return state
  }
}

export default reducer
