<template>
  <v-container class="white padded elevation-2">
    <h1 class="header">login</h1>
    <v-row no-gutters>
        <v-col cols="4">
        </v-col>
        <v-col cols="4">
                <form
                  name="tab-tracker-form"
                  autocomplete="off">
                  <v-text-field
                    label="Email"
                    v-model="email"
                  ></v-text-field>
                  <br>
                  <v-text-field
                    label="Password"
                    type="password"
                    v-model="password"
                    autocomplete="new-password"
                  ></v-text-field>
                </form>
                <br>
                <div class="danger-alert" v-html="error" />
                <br>
                <v-btn
                  dark
                  class="cyan"
                  @click="login">
                  Login
                </v-btn>
        </v-col>
        <v-col cols="4">
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.padded{
  padding-top: 50px;

}
</style>
