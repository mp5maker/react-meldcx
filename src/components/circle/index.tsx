import { Theme, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { CSSProperties, makeStyles } from '@mui/styles'
import get from 'lodash/get'
import * as React from 'react'

interface ICircleProps<T> {
  item?: T
  style?: CSSProperties
  radius?: number
}

const useStyles = makeStyles((theme: Theme) => ({
  container: ({ radius, show }: { radius: number; show: boolean }) => ({
    display: 'block',
    position: 'relative',
    ...(radius
      ? {
          width: radius * 2,
          height: radius * 2
        }
      : {
          height: 80,
          width: 80
        }),
    backgroundColor: show
      ? theme.palette.secondary.main
      : theme.palette.primary.main,
    borderRadius: '50%'
  }),
  content: {
    position: 'absolute',
    transform: 'translate(-30%, -30%)'
  }
}))

const Circle = <T,>({ item, radius = 80, ...props }: ICircleProps<T>) => {
  const [show, setShow] = React.useState<boolean>(false)
  const classes = useStyles({ radius, show })

  const onMouseEnter = React.useCallback(() => {
    if (!show) setShow(true)
  }, [show])

  const onMouseLeave = React.useCallback(() => {
    setShow(false)
  }, [show])

  return (
    <Box
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-testid="circle"
      className={classes.container}
      {...props}
    >
      {show ? (
        <Box className={classes.content}>
          <Box>
            <Typography variant="caption">{get(item, 'name', 0)}</Typography>
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  )
}

Circle.defaultProps = {
  item: {},
  style: {},
  radius: 80
}

export default Circle
