import { BASE_URL } from '../constants/constants.js'
import axios from 'axios'

export const requester = axios.create({ baseURL: BASE_URL })

requester.interceptors.request.use((config) => {
  config.headers['Accept-Language'] = localStorage.getItem('language')
  return config
})
