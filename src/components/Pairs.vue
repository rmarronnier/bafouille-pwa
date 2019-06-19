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
              
          <MessagesDialog v-bind:pair="pair"/>

            </v-list-tile-action>
                        <v-list-tile-action>
              <v-icon @click="blockout(pair.users[0].id)" color="red">mdi-delete</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

  </section>
</template>

<script>
import MessagesDialog from './MessagesDialog.vue'

export default {
  name: "Pairs",
  computed: {
    pairs: function() {
      return this.$store.getters.pairs
    }
  },
  data () {
      return {
        notifications: false,
      }
    },
        methods: {
      blockout: function (user_id) {
                  let data = {
          user_id: user_id
        }
        this.$store.dispatch('blockOut', JSON.stringify(data))
      }
    },
  components: {
MessagesDialog
  }
}
</script>

<style lang="scss">
</style>

