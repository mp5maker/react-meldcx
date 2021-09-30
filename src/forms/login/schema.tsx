import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup.string().email('Invalid Email').required('Required'),
  password: yup.string().required('Required')
})

export default schema
