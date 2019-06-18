<template>


<v-dialog content-class="correspondence" v-model="dialog" fullscreen transition="dialog-bottom-transition">
<template v-slot:activator="{ on }">
        <v-badge inline>
          <template v-slot:badge>

            <span>{{ pair.messages.length }}</span>
          </template><v-icon v-on="on">mdi-chat</v-icon>
        </v-badge>
</template>
<v-btn fixed fab @click="dialog = false">
            <v-icon x-large color="black">
            mdi-close
          </v-icon>
          </v-btn>
          <Messages v-bind:messages="pair.messages"></Messages>
        <WriteMessage v-bind:pair_id="pair.id"></WriteMessage>
</v-dialog>


</template>

<script>
export default {
  name: 'MessagesDialog',
props : {
     pair : Object
    },
   data(){
      return {
        dialog : false
      }
    },

    methods: {
  computed: {
    pairs: function() {
      return this.$store.getters.pairs
    }
    }
}
      }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
