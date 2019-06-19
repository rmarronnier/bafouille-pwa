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
import Messages from './Messages.vue'
import WriteMessage from './WriteMessage.vue'
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
  computed: {
    pairs: function() {
      return this.$store.getters.pairs
    }
    },
      components: {
    Messages,
    WriteMessage,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .correspondence{
  background-color: white;
  }
</style>
