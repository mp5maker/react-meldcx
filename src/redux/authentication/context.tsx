import * as React from 'react'
import reducer, { initialState, TInitialStateProps } from './reducer'

interface IAuthenticationContextProps {
  state: TInitialStateProps
  dispatch: (params: any) => any | void
}

export const AuthenticationContext = React.createContext<
  Partial<IAuthenticationContextProps>
>({})

interface IAuthenticationProviderProps {}

const AuthenticationProvider: React.FC<IAuthenticationProviderProps> = ({
  children
}) => {
  const [state, dispatch]: any = React.useReducer(reducer, initialState)

  return (
    <AuthenticationContext.Provider value={{ state, dispatch }}>
      <>{children}</>
    </AuthenticationContext.Provider>
  )
}

export default AuthenticationProvider
