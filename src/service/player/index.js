import { http } from '../config.js'

export default {
  StartResumePlayback: (data) => {
    return http.put('me/player/play', data)
  }
}
