<template>
 <main class="container ui grid"><h1>Write whatever is on your mind</h1>
<form>
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
  <v-btn flat type="submit" v-on:click="updatebody('getLetters')">Get relevant letters</v-btn>
    <v-btn flat type="submit" v-on:click="updatebody('getLettersByReadability')">Get readable letters</v-btn>
    <v-btn flat type="submit" v-on:click="updatebody('getLettersBySentiment')">Get mood-based letters</v-btn>
</form>
</main>
</template>

<script>
export default {
  name: 'GuestBody',

   data(){
      return {
        body : ''
      }
    },
created(){
    this.body = this.$store.getters.user_body
},
    methods: {
      updatebody: function (action) {
          let data = {
          body: this.body,
        }
        this.$store.dispatch(action, data)
        this.$router.push("/play")
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
