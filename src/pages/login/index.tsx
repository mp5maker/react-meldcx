import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import { AxiosError, AxiosResponse } from 'axios'
import get from 'lodash/get'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import apiHelper from '../../api/apiHelper'
import LoginForm from '../../forms/login'
import useAlert from '../../hooks/useAlert'
import useCommonStyles from '../../hooks/useCommonStyles'

interface ILoginProps {}

const useStyles: any = makeStyles((theme: any) => ({
  container: {
    height: '100%'
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

  const handleSubmit = ({ form, setSubmitting }: any) => {
    const onSuccess = (response: AxiosResponse) => {
      console.log(response)
      setSubmitting(false)
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

  return (
    <Box className={`${classes.container} ${commonClasses.center}`}>
      <Box className={classes.content}>
        <LoginForm title={t('LOGIN')} onSubmit={handleSubmit} />
      </Box>
    </Box>
  )
}

export default Login
