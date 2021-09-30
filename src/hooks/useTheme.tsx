import { ThemeContext } from '@emotion/react'
import * as React from 'react'

const useTheme = () => {
  const { state, dispatch, theme }: any = React.useContext(ThemeContext)
  return { state, dispatch, theme }
}

export default useTheme
