<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-transparent">
      <q-toolbar>
        <q-input class="col-10" dark dense standout v-model="search">
          <template v-slot:prepend>
            <q-icon v-if="search === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
          </template>
        </q-input>

        <q-space />
        <q-btn
          flat
          dense
          round
          color="white"
          icon="settings"
          aria-label="Settings"
        >
          <q-menu>
            <div class="row no-wrap q-pa-md">
              <div class="col-12 items-center">
                <q-avatar square size="190px">
                  <img :src="photoprofile">
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">{{ name }}</div>

                <div class="col-12 row">
                  <q-btn
                    class="col-12"
                    color="primary"
                    label="Logout"
                    size="sm"
                    @click="Logout"
                  />
                </div>
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Profile from '../service/profile'
export default {
  name: 'MainLayout',
  data () {
    return {
      search: '',
      mobileData: true,
      bluetooth: false,
      name: '',
      photoprofile: ''
    }
  },
  methods: {
    Logout () {
      this.$router.push('/')
    },
    getProfile () {
      Profile.getProfile()
        .then((profile) => {
          this.$q.sessionStorage.set('profile', profile.data)
          this.photoprofile = profile.data.images[0].url
          this.name = profile.data.display_name
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.getProfile()
  }
}
</script>
