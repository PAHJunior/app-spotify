import axios from 'axios'
import { SessionStorage, Notify } from 'quasar'

export const http = axios.create({
  baseURL: process.env.API,
  timeout: 30000
})
http.interceptors.request.use(async (config) => {
  try {
    const token = await SessionStorage.getItem('token')
    if (token) {
      config.headers.Authorization = 'Bearer ' + token.access_token
    }
    return config
  } catch (error) {
    console.log(error)
    Notify.create(error.response)
  }
})
