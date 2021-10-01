import { useMediaQuery } from '@mui/material'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import * as React from 'react'
import Circle from '../../components/circle'

const useStyles: any = makeStyles((_theme: any) => ({
  circleContainer: {
    position: 'fixed',
    width: '100%',
    height: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  circleContent: ({ isWidthLessThan767 }: any) => ({
    position: 'relative',
    width: isWidthLessThan767 ? 250 : 500,
    height: isWidthLessThan767 ? 250 : 500,
    padding: 0,
    '& *': {
      display: 'block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: isWidthLessThan767 ? 40 : 80,
      height: isWidthLessThan767 ? 40 : 80,
      margin: isWidthLessThan767 ? -20 : -40,
      transition: 'all ease-in-out 0.25s'
    }
  })
}))

interface IOrbitProps<T> {
  list: Array<T>
}

const Orbit = <T,>({ list }: IOrbitProps<T>) => {
  const isWidthLessThan767 = useMediaQuery('(max-width: 767px)')
  const classes = useStyles({ isWidthLessThan767 })
  const listLength = list.length

  const CirclesContent = React.useMemo(() => {
    let rotation = 0
    const angle = 360 / listLength

    return (
      <Box className={`${classes.circleContent} circleContent`}>
        {list.map((item: any, index: number) => {
          if (index !== 0) rotation += angle
          const style = {
            transform: `rotate(${rotation}deg) translate(${
              isWidthLessThan767 ? 125 : 250
            }px) rotate(-${rotation}deg)`
          }

          return (
            <React.Fragment key={`${index}`}>
              <Circle item={item} style={style} />
            </React.Fragment>
          )
        })}
      </Box>
    )
  }, [listLength, isWidthLessThan767])

  return <Box className={classes.circleContainer}>{CirclesContent}</Box>
}

export default Orbit
