import get from 'lodash/get'
import * as React from 'react'
import { AlertContext } from '../redux/alert/context'
import { ALERT_ACTION_TYPE } from '../redux/alert/reducer'

const useAlert = () => {
  const { state, dispatch }: any = React.useContext(AlertContext)
  const isVisible = get(state, 'isVisible', false)
  const severity = get(state, 'severity', {})
  const text = get(state, 'text', {})

  const setAlert = React.useCallback((props) => {
    dispatch({
      type: ALERT_ACTION_TYPE.SET_ALERT,
      value: {
        ...props
      }
    })
  }, [])

  return { state, dispatch, isVisible, severity, text, setAlert }
}

export default useAlert
