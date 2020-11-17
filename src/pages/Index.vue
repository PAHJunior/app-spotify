<template>
  <q-page>
    <div>
      <q-tab-panels
        v-model="tab"
        animated
        class="bg-transparent"
      >
        <q-tab-panel name="home">
          <home-music></home-music>
        </q-tab-panel>

        <q-tab-panel name="music">

        </q-tab-panel>
        <q-tab-panel name="sliders">
          <div class="text-h6">Sliders</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </div>

    <div class="absolute-bottom">

      <q-tabs
        v-model="tab"
        class="bg-transparent text-primary shadow-2"
      >
        <q-tab name="home" icon="home" />
        <q-tab name="music" icon="fas fa-music" />
        <q-tab name="sliders" icon="fas fa-sliders-h" />
      </q-tabs>
    </div>
  </q-page>
</template>

<script>
import HomeMusic from '../components/home'

export default {
  name: 'PageIndex',
  data () {
    return {
      tab: 'home'
    }
  },
  components: {
    HomeMusic
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
