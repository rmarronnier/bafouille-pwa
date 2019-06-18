<template>
 <main class="container ui grid"><h1>Write your profile</h1>
<form @submit.prevent="updatebody">
<v-textarea
          solo
          auto-grow
          autofocus
          name="body"
          v-bind:label= "body"
          v-bind:value= "body"
          v-model="body"
        >
        </v-textarea>
  <v-btn flat type="submit">Save !</v-btn>
</form>
</main>
</template>

<script>
export default {
  name: 'WriteBody',

   data(){
      return {
        body : ''
      }
    },
created(){
    this.body = this.$store.getters.user_body
},
    methods: {
      updatebody: function () {
          let data = {
          body: this.body,
        }
        this.$store.dispatch('changeBody', data)
        this.$router.push("/actions")
      }
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
