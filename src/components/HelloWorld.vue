<template>
  <div class="hello">
    <h1>Bafouille is ...</h1>

<v-card>
  <v-card-text>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore distinctio odit dolore, quae quam, incidunt tempora in voluptatibus id repellat voluptatem. Officiis a dolor accusantium ut, ratione adipisci quasi nam.
  </v-card-text>
</v-card>

<v-card>
  <v-card-text>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore distinctio odit dolore, quae quam, incidunt tempora in voluptatibus id repellat voluptatem. Officiis a dolor accusantium ut, ratione adipisci quasi nam.
  </v-card-text>
</v-card>

<v-card>
  <v-card-text>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore distinctio odit dolore, quae quam, incidunt tempora in voluptatibus id repellat voluptatem. Officiis a dolor accusantium ut, ratione adipisci quasi nam.
  </v-card-text>
</v-card>

<v-btn x-large v-if="!isLoggedIn" to="/signup">Sign up</v-btn>


  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
computed: {
  isLoggedIn: function() {
      return this.$store.getters.isLoggedIn
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
