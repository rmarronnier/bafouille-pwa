<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home |</router-link>
      <router-link v-if="!isLoggedIn" to="/signup">Sign up |</router-link>
      <router-link v-if="!isLoggedIn" to="/signin">Sign in |</router-link>
      <router-link v-if="isLoggedIn" to="/read">Read |</router-link>
      <router-link v-if="isLoggedIn" to="/pairs">Pairs |</router-link>
      <router-link v-if="isLoggedIn" to="/messages">Messages |</router-link>
      <router-link to="/about"> About</router-link>
      <span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
    </div>
    <router-view/>
  </div>
</template>

<script>

  export default {
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
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
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
