import EmailIcon from '@mui/icons-material/Email'
import LockIcon from '@mui/icons-material/Lock'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import { useFormik } from 'formik'
import get from 'lodash/get'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../../components/button'
import TextField from '../../components/textField'
import settings from '../../constants/settings'
import useCommonStyles from '../../hooks/useCommonStyles'
import schema from './schema'

interface ILoginFormProps {
  title?: string
  onSubmit?: (params: any) => any | void
}

const initialValues: any = {
  email: '',
  password: ''
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    boxShadow: `0 1px 15px 0 ${theme.palette.primary.light}`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(3)
  },
  submitButton: {
    height: 50,
    padding: `${theme.spacing(3)}px ${theme.spacing(2)}px`,
    width: 150
  },
  startAdornment: {
    marginRight: theme.spacing(2)
  }
}))

const LoginForm: React.FC<ILoginFormProps> = ({ title, onSubmit }) => {
  const { t } = useTranslation()
  const commonClasses = useCommonStyles()
  const classes = useStyles()
  const theme = useTheme()
  const {
    isSubmitting,
    values,
    errors,
    handleChange,
    touched,
    handleBlur,
    handleSubmit
  }: any = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (form, { setSubmitting, setErrors }) => {
      const password = get(form, 'password', '')
      // if (password !== settings.COMMON_PASSWORD) {
      //   setErrors({
      //     ...errors,
      //     ...(password !== settings.COMMON_PASSWORD
      //       ? {
      //           password: t('THIS_PASSWORD_IS_INVALID')
      //         }
      //       : {})
      //   })
      //   setSubmitting(false)
      // } else {
      if (onSubmit) onSubmit({ form, setSubmitting, setErrors })
      // }
    }
  })

  return (
    <>
      <Box className={classes.container}>
        {title ? (
          <Box className={commonClasses.center} mb={theme.spacing(3)}>
            <Typography variant="h2">{title}</Typography>
          </Box>
        ) : (
          <></>
        )}
        <Box mb={theme.spacing(2)}>
          <TextField
            required
            fullWidth
            error={errors.email && touched.email}
            helperText={errors.email && touched.email ? errors.email : ''}
            id="login-page-username"
            label={t('EMAIL_ADDRESS')}
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            InputProps={{
              startAdornment: <EmailIcon className={classes.startAdornment} />
            }}
          />
        </Box>
        <Box mb={theme.spacing(3)}>
          <TextField
            required
            fullWidth
            error={errors.password && touched.password}
            helperText={
              errors.password && touched.password ? errors.password : ''
            }
            type="password"
            name="password"
            id="login-page-password"
            label={t('PASSWORD')}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            InputProps={{
              startAdornment: <LockIcon className={classes.startAdornment} />
            }}
          />
        </Box>
        <Box className={commonClasses.center}>
          <Button
            variant="contained"
            className={classes.submitButton}
            disabled={isSubmitting}
            onClick={handleSubmit}
          >
            {String(t('LOG_IN')).toUpperCase()}
          </Button>
        </Box>
      </Box>
    </>
  )
}

LoginForm.defaultProps = {
  title: '',
  onSubmit: () => {}
}

export default LoginForm
