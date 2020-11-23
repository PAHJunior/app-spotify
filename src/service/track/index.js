import { http } from '../config.js'

export default {
  getAudio: (id) => {
    return http.get(`/tracks/${id}`)
  }
}
