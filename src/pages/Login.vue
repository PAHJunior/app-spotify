<template>
  <div class="text-white text-center q-pa-md">
    <div class="row q-col-gutter-md justify-center" style="margin-top: 15vh">
      <div class="col-12" style="font-size: 10vh; margin-bottom: 5vh">
        yfiTops
      </div>

      <div class="row col-12">
        <q-btn
          class="col-12"
          color="primary"
          label="Autentificar"
          type="a"
          href="http://localhost:8888/login"
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
