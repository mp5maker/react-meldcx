import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../../components/button'
import Circle from '../../components/circle'
import useAuthentication from '../../hooks/useAuthentication'
import useCommonStyles from '../../hooks/useCommonStyles'
import useDevices from '../../hooks/useDevices'

interface IDevicesProps {}

const useStyles: any = makeStyles((theme: any) => ({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  content: {
    height: '100%'
  },
  bottom: {
    marginTop: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    padding: theme.spacing(3)
  },
  button: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2)}px`,
    width: 120
  },
  circleContainer: {
    position: 'fixed',
    width: '100%',
    height: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  circleContent: {
    position: 'relative',
    width: 500,
    height: 500,
    padding: 0,
    transition: 'all linear 0.25s',
    '& *': {
      display: 'block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: 80,
      height: 80,
      margin: -40,
      transition: 'all ease-in-out 0.25s'
    }
  }
}))

const Devices: React.FC<IDevicesProps> = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  const commonClasses = useCommonStyles()
  const { devices }: any = useDevices()
  const theme = useTheme()
  const { logOut } = useAuthentication()
  const devicesLength = devices.length

  const handleLogout = () => logOut()

  const handleNotify = () => {}

  const CirclesContent = React.useMemo(() => {
    let rotation = 0
    const angle = 360 / devicesLength

    return (
      <Box className={classes.circleContent}>
        {devices.map((item: any, index: number) => {
          if (index !== 0) rotation += angle
          const style = {
            transform: `rotate(${rotation}deg) translate(250px) rotate(-${rotation}deg)`
          }

          return (
            <React.Fragment key={`${index}`}>
              <Circle item={item} style={style} />
            </React.Fragment>
          )
        })}
      </Box>
    )
  }, [devicesLength])

  return (
    <Box className={classes.container}>
      <Box className={`${classes.content} ${commonClasses.center} `}>
        <Box className={classes.box}>
          <Box>
            <Typography variant="h4">
              {devices.length} {t('DEVICES')}
            </Typography>
          </Box>
          <Box className={commonClasses.center}>
            <Typography variant="caption">{t('ONLINE')}</Typography>
          </Box>
        </Box>
      </Box>
      <Box className={`${classes.bottom} ${commonClasses.center}`}>
        <Box>
          <Button
            className={classes.button}
            variant="contained"
            onClick={handleNotify}
            style={{ marginRight: theme.spacing(2) }}
          >
            {t('NOTIFY')}
          </Button>
          <Button
            className={classes.button}
            variant="outlined"
            onClick={handleLogout}
          >
            {t('LOG_OUT')}
          </Button>
        </Box>
      </Box>
      <Box className={`${classes.circleContainer}`}>{CirclesContent}</Box>
    </Box>
  )
}

export default Devices
