import { makeStyles } from '@mui/styles'

const useCommonStyles = makeStyles((_theme) => ({
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sideBySide: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}))

export default useCommonStyles
