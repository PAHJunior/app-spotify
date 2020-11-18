<template>
  <div>
    <q-list bordered class="bg-white" v-for="(playlist, index) in playlists" :key="index">
      <q-item clickable v-ripple class="row">
          <q-item-section class="col-2">
            <q-avatar square :size="playlist.images[0].width.toString()">
              <img :src="playlist.images[0].url">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <span class="text-bold">{{playlist.name}}</span>
            <span class="text-caption">{{playlist.owner.display_name}}</span>
          </q-item-section>
      </q-item>
      <q-separator />

    </q-list>
  </div>
</template>

<script>
import Playlist from '../service/playlist'
export default {
  name: 'Playlist',
  data () {
    return {
      playlists: []
    }
  },
  methods: {
    Logout () {
      this.$router.push('/')
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
