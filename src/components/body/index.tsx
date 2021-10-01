import { makeStyles } from '@mui/styles'
import Paper from '@mui/material/Paper'
import * as React from 'react'

interface IBodyPropsInterface {}

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  }
}))

const Body: React.FC<IBodyPropsInterface> = ({ children }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.root} style={{ borderRadius: 0 }}>
      <>{children}</>
    </Paper>
  )
}
export default Body
