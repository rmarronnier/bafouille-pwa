<template>
 <main class="container ui grid"><h1>Write your profile</h1>
<form @submit.prevent="updatebody">
<v-textarea
          solo
          auto-grow
          autofocus
          name="newbody"
          label="Solo textarea"
        >
        {{userbody}}
        </v-textarea>
  <v-btn flat type="submit">Save !</v-btn>
</form>

<v-btn flat to="/read">Don't want to write yet?</v-btn>
</main>
</template>

<script>
export default {
  name: 'WriteBody',

   data(){
      return {
        new_body : ""
      }
    },

    methods: {
      updatebody: function () {
        let newbody = this.newbody 
        this.$store.dispatch('changeBody', { newbody })
       .then(() => this.$router.push('/read'))
       .catch(err => console.log(err))
      }
    },
    computed : {
       userbody : function(){ return this.$store.getters.user_body}
     }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
