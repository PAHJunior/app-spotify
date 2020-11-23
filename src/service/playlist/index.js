import { http } from '../config.js'

export default {
  getPlaylistUser: () => {
    return http.get('me/playlists')
  },
  getTracks: (playlistId) => {
    return http.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`)
  }
}
