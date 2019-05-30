<template>
<form @submit.prevent="blockout">
<v-btn
              color="pink"
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
</style>
