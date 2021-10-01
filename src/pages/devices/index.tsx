import { Theme, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import { AxiosError, AxiosResponse } from 'axios'
import get from 'lodash/get'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import apiHelper from '../../api/apiHelper'
import Button from '../../components/button'
import settings from '../../constants/settings'
import useAlert from '../../hooks/useAlert'
import useAuthentication from '../../hooks/useAuthentication'
import useCommonStyles from '../../hooks/useCommonStyles'
import useDevices from '../../hooks/useDevices'
import Orbit from './orbit'

interface IDevicesProps {}

const useStyles = makeStyles((theme: Theme) => ({
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
  }
}))

const Devices: React.FC<IDevicesProps> = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  const commonClasses = useCommonStyles()
  const { devices }: any = useDevices()
  const theme = useTheme()
  const { logOut } = useAuthentication()
  const { setAlert } = useAlert()

  const handleLogout = () => logOut()

  const handleNotify = () => {
    const notify = ({ message }: { message: string }) => {
      const onSuccessNotify = () => {
        setAlert({
          severity: 'success',
          isVisible: true,
          text: t('SUCCESSFULLY_NOTIFIED')
        })
      }

      const onErrorNotify = (error: AxiosError) => console.debug(error)

      apiHelper.notify
        .post({
          body: {
            name: settings.USER_NAME,
            email: settings.USER_EMAIL,
            repoUrl: settings.REPO_URL,
            message
          }
        })
        .then(onSuccessNotify)
        .catch(onErrorNotify)
    }

    const onSuccessChuckNorris = (response: AxiosResponse) => {
      const message = get(response, 'data.value', '')
      notify({ message })
    }

    const onErrorChuckNorris = () => {
      notify({ message: 'Chuck Norris Failed Me ' })
    }

    apiHelper.chuckNorris
      .get()
      .then(onSuccessChuckNorris)
      .catch(onErrorChuckNorris)
  }

  return (
    <Box className={classes.container}>
      <Box className={`${classes.content} ${commonClasses.center} `}>
        <Box>
          <Box>
            <Typography variant="h4">
              {devices.length} {devices.length > 1 ? t('DEVICES') : t('DEVICE')}
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
      <Orbit list={devices} />
    </Box>
  )
}

export default Devices
