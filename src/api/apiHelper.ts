import axios from './axios'

interface IUserPostBodyProps {
  body: {
    email: string
    password: string
  }
}

interface INotifyPostBodyProps {
  body: {
    name: string
    email: string
    repoUrl: string
    message: string
  }
}

const apiHelper = {
  info: {
    get: () => axios.get('/')
  },
  user: {
    login: ({ body }: { body: IUserPostBodyProps }) =>
      axios.post('/login', body),
    logout: () => axios.get('/logout')
  },
  devicies: {
    getAll: () => axios.get('/devices')
  },
  notify: {
    post: ({ body }: { body: INotifyPostBodyProps }) =>
      axios.post('/notify', body)
  }
}

export default apiHelper
