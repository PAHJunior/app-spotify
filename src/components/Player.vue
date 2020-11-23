<template>
  <div>
    <q-img
      :src="url"
      style="height: 380px; max-width: 330px"
      :ratio="1"
      basic
      spinner-color="white"
      class="rounded-borders"
    >
      <div class="row absolute-bottom text-center bg-transparent">
        <span class="text-h6 col-12 text-white">{{music}}</span>
        <span class="text-subtitle1 col-12 text-white">{{autor}}</span>
      </div>
    </q-img>
    <q-slider
      v-model="startminute"
      dark
      :min="0.01"
      :max="finishminute"
      :step="0.01"
    />
    <div class="row" style="margin-top: -10px">
      <span class="text-caption text-grey-5">{{minute}}</span>
      <q-space />
      <span class="text-caption text-grey-5">{{finish}}</span>
    </div>
    <div class="row q-col-gutter-md justify-center">
      <div class="col-2">
        <q-btn flat round color="primary" icon="fas fa-random" />
      </div>
      <div class="col-2">
        <q-btn flat round color="primary" icon="fast_rewind" />
      </div>
      <div class="col-2">
        <q-btn round color="white" icon="pause" text-color="dark" @click="startMusic"/>
      </div>
      <div class="col-2">
        <q-btn flat round color="primary" icon="fast_forward" />
      </div>
      <div class="col-2">
        <q-btn flat round color="primary" icon="share" />
      </div>
    </div>
  </div>
</template>

<script>
import { SessionStorage } from 'quasar'
import Playback from '../service/player'
export default {
  name: 'Player',
  data () {
    return {
      url: 'https://placeimg.com/500/300/nature',
      startminute: 0.00,
      finishminute: 4.34,
      autor: 'Body destroyer',
      music: 'David Muller',
      sdk: null
    }
  },
  mounted () {
    this.initiatePlayer()
  },
  computed: {
    minute: function () {
      return this.startminute.toFixed(2)
    },
    finish: function () {
      return this.finishminute.toFixed(2)
    }
  },
  methods: {
    waitForSpotifyWebPlaybackSDKToLoad: async function () {
      return new Promise(resolve => {
        if (window.Spotify) {
          resolve(window.Spotify)
        } else {
          window.onSpotifyWebPlaybackSDKReady = () => {
            resolve(window.Spotify)
          }
        }
      })
    },
    initiatePlayer: async function () {
      const { Player } = await this.waitForSpotifyWebPlaybackSDKToLoad()
      const token = await SessionStorage.getItem('token')
      this.sdk = new Player({
        name: 'Palestra ETEC',
        volume: 1.0,
        getOAuthToken: cb => {
          cb(token.access_token)
        }
      })

      console.log(JSON.stringify(this.sdk))
      // Error handling
      this.sdk.addListener('initialization_error', ({ message }) => { console.log('Initialization_error: ' + message) })
      this.sdk.addListener('authentication_error', ({ message }) => { console.log('Authentication_error: ' + message) })
      this.sdk.addListener('account_error', ({ message }) => { console.log('Account_error: ' + message) })
      this.sdk.addListener('playback_error', ({ message }) => { console.log('Playback_error: ' + message) })
      // Playback status updates
      this.sdk.addListener('player_state_changed', state => {
        // Update UI information on player state changed
      })
      // Ready
      this.sdk.addListener('ready', ({ deviceId }) => {
        console.log('Ready with Device Id: ', deviceId)
      })
      // Not Ready
      this.sdk.addListener('not_ready', ({ deviceId }) => {
        console.log('Not ready with device Id: ', deviceId)
      })
      this.sdk.connect()
    },
    startMusic: async function () {
      const token = await SessionStorage.getItem('token')
      console.log(token)
      const body = {
        context_uri: 'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr',
        offset: {
          position: 5
        }
      }
      Playback.StartResumePlayback(body)
        .then((music) => {
          console.log(music)
        })
        .catch((error) => {
          console.error(error.response)
        })
    }
  }
}
</script>
