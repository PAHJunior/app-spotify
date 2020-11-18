import { http } from '../config.js'

export default {
  getProfile: () => {
    return http.get('/me')
  }
}
