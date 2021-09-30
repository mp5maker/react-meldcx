import * as yup from 'yup'

const schema = ({ t }: any) =>
  yup.object().shape({
    email: yup.string().email(t('INVALID_EMAIL')).required(t('REQUIRED')),
    password: yup.string().required(t('REQUIRED'))
  })

export default schema
