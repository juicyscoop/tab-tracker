<template>
  <v-app-bar fixed dark class="orange">
    <h2 fixed class="mr-4 text-no-wrap custom-title">
        <router-link
        class="home"
        tag="span"
        :to="{
          name: 'songs'
        }">
        TabTracker
      </router-link>
    </h2 >
    <!-- <v-app-bar-items>
        <v-btn flat dark>
            Browse</v-btn>
    </v-app-bar-items> -->
    <v-spacer></v-spacer>
        <router-link to="login">
            <v-btn text dark
            @click="navigateTo({name: 'login'})">
                Login
            </v-btn>
        </router-link>
        <router-link to="register">
            <v-btn text dark
            @click="navigateTo({name: 'register'})">
                Sign Up
            </v-btn>
        </router-link>
  </v-app-bar>
</template>
<script>
export default {
  methods: {
    navigateTo (route) {
      this.$route.push(route)
    }
  }
//   methods: {
//     logout () {
//       this.$store.dispatch('setToken', null)
//       this.$store.dispatch('setUser', null)
//       this.$router.push({
//         name: 'songs'
//       })
//     }
//   }
}
</script>

<style scoped>
/* .custom-title{
    display: stretch;
} */
.span__content{
  width: 400px !important;
}
.home {
    cursor: pointer;
}

.home:hover {
    color: #E9E
}
</style>
