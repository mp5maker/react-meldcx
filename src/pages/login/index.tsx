import { Theme } from '@mui/material'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import { AxiosError, AxiosResponse } from 'axios'
import get from 'lodash/get'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import apiHelper from '../../api/apiHelper'
import routes from '../../constants/routes'
import settings from '../../constants/settings'
import LoginForm from '../../forms/login'
import useAlert from '../../hooks/useAlert'
import useAuthentication from '../../hooks/useAuthentication'
import useCommonStyles from '../../hooks/useCommonStyles'
import useLocalStorage from '../../hooks/useLocalStorage'

interface ILoginProps {}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '100%',
    position: 'relative'
  },
  content: {
    width: 400,
    height: 400,
    padding: theme.spacing(2)
  }
}))

const Login: React.FC<ILoginProps> = () => {
  const classes = useStyles()
  const commonClasses = useCommonStyles()
  const { t } = useTranslation()
  const { setAlert } = useAlert()
  const { setLocalStorage, getLocalStorage } = useLocalStorage()
  const { logIn } = useAuthentication()
  const history = useHistory()

  const handleSubmit = ({ form, setSubmitting }: any) => {
    const onSuccess = (response: AxiosResponse) => {
      const data = get(response, 'data', '')
      if (data) {
        setLocalStorage({ key: settings.ACCESS_TOKEN, value: data })
        logIn({
          userInfo: {
            [settings.ACCESS_TOKEN]: data
          }
        })
        setSubmitting(false)
        history.push(routes.devices.path)
      }
    }

    const onError = (error: AxiosError) => {
      const data = get(error, 'response.data', '')
      setAlert({
        severity: 'error',
        isVisible: true,
        text: data
      })
      setSubmitting(false)
    }

    apiHelper.user.login({ body: form }).then(onSuccess).catch(onError)
  }

  React.useEffect(() => {
    const token = getLocalStorage({ key: settings.ACCESS_TOKEN })
    if (token) {
      logIn({ userInfo: { [settings.ACCESS_TOKEN]: token } })
      history.push(routes.devices.path)
    }
  }, [])

  return (
    <Box className={`${classes.container} ${commonClasses.center}`}>
      <Box className={classes.content}>
        <LoginForm title={t('LOGIN')} onSubmit={handleSubmit} />
      </Box>
    </Box>
  )
}

export default Login
