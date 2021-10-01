import { makeStyles } from '@mui/styles'
import * as React from 'react'
import Box from '@mui/material/Box'

interface ICircleProps {
  item?: any
  style?: any
  radius?: any
}

const useStyles = makeStyles((theme: any) => ({
  container: ({ radius }: any) => ({
    display: 'block',
    ...(radius
      ? {
          width: radius * 2,
          height: radius * 2
        }
      : {
          height: 80,
          width: 80
        }),
    backgroundColor: theme.palette.primary.main,
    borderRadius: '50%'
  })
}))

const Circle: React.FC<ICircleProps> = ({ item, radius, ...props }) => {
  const classes = useStyles({ radius })
  console.debug(item)

  return <Box data-testid="circle" className={classes.container} {...props} />
}

Circle.defaultProps = {
  item: {},
  style: {},
  radius: 80
}

export default Circle
