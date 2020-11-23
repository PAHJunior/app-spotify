<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<style>
  body {
    background: linear-gradient(10.08deg, #000000 43.18%, rgba(255, 255, 255, 0) 99.47%), #555555;
  }
</style>

<script>
export default {
  mounted () {
    window.onSpotifyWebPlaybackSDKReady = () => {}
  },
  name: 'App'
}
</script>
