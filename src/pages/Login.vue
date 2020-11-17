<template>
  <div class="text-white text-center q-pa-md">
    <div class="row q-col-gutter-md justify-center" style="margin-top: 15vh">
      <div class="col-12" style="font-size: 10vh; margin-bottom: 5vh">
        Spotify
      </div>

      <q-input
        outlined
        bg-color="grey-7"
        v-model="login"
        class="col-12"
        label="Nome ou usuário"
        filled
      />

      <q-input
        outlined
        bg-color="grey-7"
        v-model="senha"
        class="col-12"
        label="Nome ou usuário"
        filled
      />

      <div class="row col-12">
        <q-btn
          class="col-12"
          color="primary"
          label="Entrar"
          @click="Login"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PageLogin',
  data () {
    return {
      login: '',
      senha: ''
    }
  },
  methods: {
    Login () {
      this.$router.push('/home')
    }
  }
}
</script>
