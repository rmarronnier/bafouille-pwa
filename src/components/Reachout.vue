<template>
<form @submit.prevent="reachout">
<v-btn
class="reachbutton"
              color="transparent"
              x-large
              bottom
              left
              fixed
              fab
              v-model="profile"
              type="submit"
            >
              <v-icon class="reachblock"
              small
              >Reachout !</v-icon>
            </v-btn>
</form>
</template>

<script>
export default {
  name: 'Reachout',
props : {
      profile : Number
    },
   data(){
      return {
        user_id : this.profile
      }
    },

    methods: {
      reachout: function () {
          let data = {
          user_id: this.profile
        }
        this.$store.dispatch('reachOut', JSON.stringify(data))
       //.then(() => this.$router.push('/read'))
       .catch(err => (err))
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.reachbutton {
  margin: 20px;
}

.reachblock {
    color: white !important;
text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
</style>
