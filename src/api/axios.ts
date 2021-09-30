import defaultAxios from 'axios'
import settings from '../constants/settings'

const axios = defaultAxios.create({
  baseURL: 'http://35.201.2.209:8000/',
  timeout: 30000
})

const onSuccessRequest = (config: any) => {
  const accessToken = localStorage.getItem(settings.ACCESS_TOKEN)
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
}

const onErrorRequest = (error: any) => Promise.reject(error)
axios.interceptors.request.use(onSuccessRequest, onErrorRequest)

export default axios
