<template>
<form @submit.prevent="next">
<v-btn
class="nextbutton"
              color="transparent"
              x-large
              bottom
              right
              fixed
              fab
              v-model="profile"
              type="submit"
            >
              <v-icon class="reachblock"
              small
              >Next !</v-icon>
            </v-btn>
</form>
</template>

<script>
export default {
  name: 'NextLetterButton',

    methods: {
      next: function () {
        this.$store.commit('nextLetter')
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nextbutton {
  margin: 20px;
}

.reachblock {
    color: white !important;
text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
</style>
