import { Theme } from '@mui/material'
import Box from '@mui/material/Box'
import { CSSProperties, makeStyles } from '@mui/styles'
import * as React from 'react'

interface ICircleProps<T> {
  item?: T
  style?: CSSProperties
  radius?: number
}

const useStyles = makeStyles((theme: Theme) => ({
  container: ({ radius }: { radius: number }) => ({
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

const Circle = <T,>({ item, radius = 80, ...props }: ICircleProps<T>) => {
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
