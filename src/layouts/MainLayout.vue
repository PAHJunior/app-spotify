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
                <q-avatar size="72px">
                  <img src="https://cdn.quasar.dev/img/avatar4.jpg">
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

                <q-btn
                  class="col-12"
                  color="primary"
                  label="Logout"
                  size="sm"
                  @click="Logout"
                />
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

export default {
  name: 'MainLayout',
  data () {
    return {
      search: '',
      mobileData: true,
      bluetooth: false
    }
  },
  methods: {
    Logout () {
      this.$router.push('/')
    }
  }
}
</script>
