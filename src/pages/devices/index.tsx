import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import * as React from 'react'

interface IDevicesProps {}

const useStyles: any = makeStyles((_theme: any) => ({
  container: {
    height: '100%'
  }
}))

const Devices: React.FC<IDevicesProps> = () => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Box>Devices</Box>
    </Box>
  )
}

export default Devices
