import * as React from 'react'
import { ThemeContext } from '../redux/theme/context'
import { THEME_ACTION_TYPE } from '../redux/theme/reducer'

const useLocalTheme = () => {
  const { state, dispatch, theme }: any = React.useContext(ThemeContext)

  const setTheme = React.useCallback((value: string) => {
    dispatch({
      type: THEME_ACTION_TYPE.CHANGE_THEME,
      value
    })
  }, [])

  return { state, dispatch, theme, setTheme }
}

export default useLocalTheme
