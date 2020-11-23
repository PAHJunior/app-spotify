<template>
  <div>
    <div v-if="!tracks">
      <span class="text-bold text-white text-h5 text-center">Playlist</span>
      <q-scroll-area class="fill-window-playlist">
        <q-list bordered class="bg-white" v-for="(playlist, index) in playlists" :key="index">
          <q-item clickable v-ripple class="row" @click="getTracks(playlist)">
              <q-item-section class="col-2">
                <q-avatar square :size="playlist.images.length > 0 ? playlist.images[0].width.toString() : '300'">
                  <img :src="playlist.images.length > 0 ? playlist.images[0].url : null">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <span class="text-bold">{{playlist.name}}</span>
                <span class="text-caption">{{playlist.owner.display_name}}</span>
                <span class="text-caption">Musicas: {{playlist.tracks.total}}</span>
              </q-item-section>
          </q-item>
          <q-separator />
        </q-list>
      </q-scroll-area>
    </div>
    <div v-else>
      <q-item-section>
        <span class="text-bold text-white text-h5 text-center">Músicas</span>
      </q-item-section>
      <div class="row q-mb-sm justify-center">
        <q-btn label="Ordem Aleatória" class="col-6" color="primary" />
      </div>
      <q-scroll-area class="fill-window">
        <q-list bordered class="bg-white" v-for="(track, index) in tracks" :key="index">
          <q-item clickable v-ripple class="row">
              <q-item-section class="col-2">
                <q-avatar square :size="track.track.album.images.length > 0 ? track.track.album.images[0].width.toString() : 300">
                  <img :src="track.track.album.images.length > 0 ? track.track.album.images[0].url : null">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <span class="text-caption">{{track.track.album.name }}</span>
                <span class="text-caption">Artistas: {{track.track.artists[0].name}}</span>
              </q-item-section>
            </q-item>
          <q-separator />
        </q-list>
      </q-scroll-area>
    </div>
  </div>
</template>

<script>
import Playlist from '../service/playlist'
export default {
  name: 'Playlist',
  data () {
    return {
      tracks: null,
      playlists: []
    }
  },
  methods: {
    Logout () {
      this.$router.push('/')
    },
    getTracks (playlist) {
      const { id } = playlist
      Playlist.getTracks(id)
        .then((tracks) => {
          const { items } = tracks.data
          this.tracks = items
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getPlaylist () {
      Playlist.getPlaylistUser()
        .then((playlist) => {
          console.log(playlist.data)
          const { items } = playlist.data
          this.playlists = items
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.getPlaylist()
  }
}
</script>

<style scoped lang="stylus">
  .fill-window
    height calc(100vh - 190px)

  .fill-window-playlist
    height calc(100vh - 155px)
</style>
