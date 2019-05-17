<template>
 <main class="container ui grid"><h1>Write your message</h1>
<form @submit.prevent="sendmessage">
<v-textarea
          solo
          auto-grow
          autofocus
          name="body"
          label= "Write your inner thoughs or useless chitchat"
          v-model="body"
        >
        </v-textarea>
  <v-btn flat type="submit">Send !</v-btn>
</form>

<v-btn flat to="/pairs">Don't want to write yet?</v-btn>
</main>
</template>

<script>
export default {
  name: 'WriteMessage',

   data(){
      return {
        body : "",
        pair_id : 1
      }
    },

    methods: {
      sendmessage: function () {
          let data = {
          body: this.body,
          pair_id: this.$store.getters.pairs['0']['id']
        }
        this.$store.dispatch('postMessage', JSON.stringify(data))
       .then(() => this.$router.push('/read'))
       .catch(err => (err))
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
