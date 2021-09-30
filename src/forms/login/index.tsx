import EmailIcon from '@mui/icons-material/Email'
import LockIcon from '@mui/icons-material/Lock'
import { useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Form, Formik, FormikValues } from 'formik'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../../components/button'
import TextField from '../../components/textField'
import useCommonStyles from '../../hooks/useCommonStyles'

interface ILoginFormProps {
  title?: string
}

const initialValues: any = {
  email: '',
  password: ''
}

const useStyles = makeStyles((theme: any) => ({
  submitButton: {
    height: 50,
    padding: `${theme.spacing(3)}px ${theme.spacing(2)}px`,
    width: 150
  }
}))

const LoginForm: React.FC<ILoginFormProps> = ({ title }) => {
  const { t } = useTranslation()
  const commonClasses = useCommonStyles()
  const classes = useStyles()
  const theme = useTheme()
  const handleSubmit = ({
    value,
    setSubmitting
  }: {
    value: FormikValues
    setSubmitting: boolean
  }) => {
    console.log(value)
    console.log(setSubmitting)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting, values, errors }: any) => {
        console.log('isSubmitting', isSubmitting)
        return (
          <Box>
            {title ? (
              <Box className={commonClasses.center} mb={theme.spacing(3)}>
                <Typography variant="h2">{title}</Typography>
              </Box>
            ) : (
              <></>
            )}
            <Form>
              <Box mb={theme.spacing(2)}>
                <TextField
                  required
                  fullWidth
                  error={errors.email}
                  id="login-page-username"
                  label={t('EMAIL_ADDRESS')}
                  value={values.email}
                  InputProps={{
                    startAdornment: <EmailIcon />
                  }}
                />
              </Box>
              <Box mb={theme.spacing(3)}>
                <TextField
                  required
                  fullWidth
                  type="password"
                  id="login-page-password"
                  label={t('PASSWORD')}
                  value={values.password}
                  InputProps={{
                    startAdornment: <LockIcon />
                  }}
                />
              </Box>
              <Box className={commonClasses.center}>
                <Button variant="contained" className={classes.submitButton}>
                  {String(t('LOG_IN')).toUpperCase()}
                </Button>
              </Box>
            </Form>
          </Box>
        )
      }}
    </Formik>
  )
}

LoginForm.defaultProps = {
  title: ''
}

export default LoginForm
