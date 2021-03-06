import {
  createTheme,
  Theme,
  ThemeProvider as MaterialThemeProvider
} from '@mui/material'
import get from 'lodash/get'
import * as React from 'react'
import themes from '../../constants/themes'
import reducer, { initialState, TInitialStateProps } from './reducer'

interface IThemeContextProps {
  state: TInitialStateProps
  dispatch: (params: any) => any | void
  theme: Theme
}

export const ThemeContext = React.createContext<Partial<IThemeContextProps>>({})

interface IThemeContextProviderProps {}

const ThemeProvider: React.FC<IThemeContextProviderProps> = ({ children }) => {
  const [state, dispatch]: any = React.useReducer(reducer, initialState)
  const theme = get(state, 'theme', '')
  const appliedTheme = createTheme(themes[theme])

  return (
    <ThemeContext.Provider value={{ state, dispatch, theme: appliedTheme }}>
      <MaterialThemeProvider theme={appliedTheme}>
        <>{children}</>
      </MaterialThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
