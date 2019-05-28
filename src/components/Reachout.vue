<template>
<form @submit.prevent="reachout">
<v-btn
              color="pink"
              dark
              small
              absolute
              bottom
              left
              fab
              v-model="profile"
              type="submit"
            >
              <v-icon>Reachout !</v-icon>
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
</style>
