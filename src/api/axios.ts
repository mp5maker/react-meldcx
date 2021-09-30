import defaultAxios from 'axios'

const axios = defaultAxios.create({
  baseURL: 'http://35.201.2.209:8000/',
  timeout: 30000
})

export default axios
