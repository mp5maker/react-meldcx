import { useMediaQuery } from '@mui/material'
import { makeStyles } from '@mui/styles'
import * as React from 'react'
import Box from '@mui/material/Box'

interface ICircleProps {
  item?: any
  style?: any
}

const useStyles = makeStyles((theme: any) => ({
  container: ({ isWidthLessThan767 }: any) => ({
    display: 'block',
    ...(isWidthLessThan767
      ? {
          width: 40,
          height: 40
        }
      : {
          height: 80,
          width: 80
        }),
    backgroundColor: theme.palette.primary.main,
    borderRadius: '50%'
  })
}))

const Circle: React.FC<ICircleProps> = ({ item, ...props }) => {
  const isWidthLessThan767 = useMediaQuery('(max-width: 767px)')
  const classes = useStyles({ isWidthLessThan767 })
  console.debug(item)

  return <Box className={classes.container} {...props} />
}

Circle.defaultProps = {
  item: {},
  style: {}
}

export default Circle
