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
        <q-btn round color="white" icon="pause" text-color="dark" />
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
export default {
  name: 'Home',
  data () {
    return {
      url: 'https://placeimg.com/500/300/nature',
      startminute: 0.00,
      finishminute: 4.34,
      autor: 'Body destroyer',
      music: 'David Muller'
    }
  },
  computed: {
    minute: function () {
      return this.startminute.toFixed(2)
    },
    finish: function () {
      return this.finishminute.toFixed(2)
    }
  }
}
</script>
