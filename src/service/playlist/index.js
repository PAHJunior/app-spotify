import { http } from '../config.js'

export default {
  getPlaylistUser: () => {
    return http.get('me/playlists')
  }
}
