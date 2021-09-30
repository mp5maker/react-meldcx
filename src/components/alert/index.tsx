import * as React from 'react'
import MaterialAlert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import useAlert from '../../hooks/useAlert'

interface IAlertProps {}

const useStyles = makeStyles((_theme: any) => ({
  container: ({ isVisible }: any) => ({
    position: 'absolute',
    width: '100%',
    left: 0,
    ...(isVisible
      ? {
          top: 0
        }
      : {
          top: '-9999px'
        })
  })
}))

const Alert: React.FC<IAlertProps> = () => {
  const timeout: any = React.useRef()
  const { severity, isVisible, text, setAlert }: any = useAlert()
  const classes = useStyles({ isVisible })

  React.useEffect(() => {
    if (timeout.current) clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      setAlert({
        severity,
        isVisible: false,
        text: ''
      })
    }, 3000)
    return () => {
      if (timeout.current) clearTimeout(timeout.current)
    }
  }, [isVisible])

  return (
    <Box className={classes.container}>
      <MaterialAlert severity={severity}>{text}</MaterialAlert>
    </Box>
  )
}

export default Alert
