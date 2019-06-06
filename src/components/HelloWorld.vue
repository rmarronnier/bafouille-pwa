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

<SignUpSteppers />


  </div>
</template>

<script>
import SignUpSteppers from '@/components/SignUpSteppers.vue'

export default {
  name: 'HelloWorld',
  components: {
    SignUpSteppers
  },
  props: {
    msg: String
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
