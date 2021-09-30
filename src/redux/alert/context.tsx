import * as React from 'react'
import reducer, { initialState } from './reducer'

interface IAlertContextProps {
  state: any
  dispatch: (params: any) => any | void
}

export const AlertContext = React.createContext<Partial<IAlertContextProps>>({})

interface IAlertProviderProps {}

const AlertProvider: React.FC<IAlertProviderProps> = ({ children }) => {
  const [state, dispatch]: any = React.useReducer(reducer, initialState)

  return (
    <AlertContext.Provider value={{ state, dispatch }}>
      <>{children}</>
    </AlertContext.Provider>
  )
}

export default AlertProvider
