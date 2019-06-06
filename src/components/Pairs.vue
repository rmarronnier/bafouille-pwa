<template>
  <section class="pairs">


        <v-list subheader>
          <v-list-tile
            v-for="pair in pairs"
            v-bind:key="pair.id"
          >

            <v-list-tile-content>
              <v-list-tile-title>{{ pair.created_at }}</v-list-tile-title>
<v-list-tile-sub-title>
              {{ pair.users[0].body }}
              </v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              

<v-dialog content-class="correspondence" v-model="dialog" fullscreen transition="dialog-bottom-transition">
<template v-slot:activator="{ on }">
<!-- <v-btn flat outline small round v-on="on">Correspondence</v-btn> -->
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

            </v-list-tile-action>
                        <v-list-tile-action>
              <v-icon color="red">mdi-delete</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

  </section>
</template>

<script>
import Messages from './Messages.vue';
import WriteMessage from './WriteMessage.vue';

export default {
  name: "Pairs",
  computed: {
    pairs: function() {
      return this.$store.getters.pairs
    }
  },
  data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false
      }
    },
  components: {
    Messages,
    WriteMessage
  }
}
</script>

<style lang="scss">

  .correspondence{
  background-color: white;
  }

</style>

