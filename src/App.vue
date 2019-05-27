<template>
  <div id="app">

<v-app>
  <v-toolbar app scroll-toolbar-off-screen=true>
          <v-toolbar-items>
            <v-btn flat to="/">Bafouille logo</v-btn>
      <v-btn flat v-if="!isLoggedIn" to="/signup">Sign up</v-btn>
      <v-btn flat v-if="!isLoggedIn" to="/signin">Sign in</v-btn>
      <v-btn flat v-if="isLoggedIn" to="/read">Read</v-btn>
      <v-btn flat v-if="isLoggedIn" to="/pairs">Pairs</v-btn>
      <v-btn flat v-if="isLoggedIn" to="/messages">Messages</v-btn>
      </v-toolbar-items>
            <v-spacer></v-spacer>
      <v-btn flat v-if="isLoggedIn"><a @click="logout">Logout</a></v-btn>
  </v-toolbar>
  <v-content>
    <v-container fluid>
      <Notifications />
      <router-view></router-view>
    </v-container>
  </v-content>
  <v-footer app>
       <v-spacer></v-spacer>
    <v-btn flat to="/about"> About</v-btn></v-footer>
    <!-- <v-snackbar v-on:notification="notificationText = $event">
      {{ notificationText }}sddslkqsldklmqskd
    </v-snackbar> -->
    
</v-app>


  </div>


</template>

<script>
  import Notifications from '@/components/Notifications.vue'


  export default {
      components: {
      Notifications
    },
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
  //   data: {
  //   notificationText: ''
  // },
    methods: {
       notification: function (text) {
    this.notificationText = text
  },
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/signin')
        })
      }
    },
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.v-btn flat-exact-active {
      color: #42b983;
    }
  }
}
</style>
