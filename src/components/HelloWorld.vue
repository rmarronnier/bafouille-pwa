<template>
  <div class="hello">
      <v-layout justify-center>
    <v-flex xs12 sm6 offset-sm3>
    <h1>Bafouille is ...</h1>







        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex xs4>
              <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-card-title>
      <h2>a text-based meeting app</h2>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      which means you can't post pictures or videos
    </v-card-text>
  </v-card>

  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-card-title>
      <h2 class="headline font-weight-bold">a text-based meeting app</h2>
    </v-card-title>

    <v-card-text>
      which means you can't post pictures or videos
    </v-card-text>
  </v-card>
  
            </v-flex>
          </v-layout>
        </v-container>












<v-card
    class="mx-auto"
    max-width="400"
  >
    <v-card-title>
      <h2>a text-based meeting app</h2>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      which means you can't post pictures or videos
    </v-card-text>
  </v-card>

<v-card
    class="mx-auto"
    max-width="400"
  >
    <v-card-title>
      <h2>a text-based meeting app</h2>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      which means you can't post pictures or videos
    </v-card-text>
  </v-card>
<SignUpSteppers />
    </v-flex>
      </v-layout>

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
