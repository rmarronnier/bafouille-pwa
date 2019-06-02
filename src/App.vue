<template>
  <div id="app">
    <v-app :dark="darkMode">
        <v-toolbar app scroll-toolbar-off-screen=true>
<v-toolbar-items>
        <MainMenu/>
              </v-toolbar-items>
            <v-spacer></v-spacer>
      <AccountMenu v-if="isLoggedIn"/>
</v-toolbar>
      <v-content>
        <v-container fluid>
          <Notifications/>
          <transition name="fade">
          <router-view/>
          </transition>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Notifications from "@/components/Notifications.vue"
import MainMenu from "@/components/MainMenu.vue"
import AccountMenu from "@/components/AccountMenu.vue"

export default {
  components: {
    MainMenu,
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
