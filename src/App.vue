<template>
  <div id="app">
    <v-app :dark="darkMode">
      <v-toolbar app scroll-toolbar-off-screen="true">
        <v-toolbar-items class="menu-top" d-flex>
          <v-btn flat to="/">Bafouille logo</v-btn>
          <v-btn flat v-if="!isLoggedIn" to="/signup">Sign up</v-btn>
          <v-btn flat v-if="isLoggedIn" to="/read">Read</v-btn>
          <v-btn flat v-if="isLoggedIn" to="/pairs">Pairs</v-btn>
          <v-spacer></v-spacer>
          <AccountMenu/>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <v-container fluid>
          <Notifications/>
          <router-view/>
        </v-container>
      </v-content>
      <v-footer app>
        <v-spacer></v-spacer>
        <v-btn flat to="/about">About</v-btn>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import Notifications from "@/components/Notifications.vue";
import AccountMenu from "@/components/AccountMenu.vue";

export default {
  components: {
    AccountMenu,
    Notifications
  },
  data() {
    return {
      goDark: false
    }
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
    darkMode: function() {
      return this.$store.getters.darkMode;
    }
  }
}
</script>

<style lang="scss">
.menu-top {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
