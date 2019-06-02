<template>
<form @submit.prevent="blockout">
<v-btn
class="blockbutton"
              color="red"
              dark
              small
              fixed
              bottom
              right
              fab
              v-model="profile"
              type="submit"
            >
              <v-icon>Blockout !</v-icon>
            </v-btn>
</form>
</template>

<script>
export default {
  name: 'Blockout',
props : {
      profile : Number
    },
   data(){
      return {
        user_id : this.profile
      }
    },

    methods: {
      blockout: function () {
          let data = {
          user_id: this.profile
        }
        this.$store.dispatch('blockOut', JSON.stringify(data))
       //.then(() => this.$router.push('/read'))
       .catch(err => (err))
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.blockbutton {
  margin: 20px;
      color: white !important;
text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
</style>
