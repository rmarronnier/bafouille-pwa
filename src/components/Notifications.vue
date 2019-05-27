<template>
  <v-snackbar v-model="show" timeout=3000>
    {{message}}
  </v-snackbar>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      message: 'ca marche !'
    }
  },
    created: function () {
    this.$store.watch(state => state.notifications.notificationText, () => {
      const msg = this.$store.state.notifications.notificationText
      if (msg !== '') {
        this.show = true
        this.message = this.$store.state.notifications.notificationText
        this.$store.commit('setNotification', '')
      }
    })
}
}
</script>