import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import LoginForm from '../../forms/login'
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

  return (
    <Box className={`${classes.container} ${commonClasses.center}`}>
      <Box className={classes.content}>
        <LoginForm title={t('LOGIN')} />
      </Box>
    </Box>
  )
}

export default Login
