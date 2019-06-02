<template>
  <div class="text-xs-center">
    <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
      <template v-slot:activator="{ on }">
        <v-btn color="black" dark v-on="on">Your own personal self account menu</v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
              <v-list-tile-sub-title>Founder of Vuetify.js</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav">
                <v-icon>favorite</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-switch :value="darkMode" @input="setDarkMode"></v-switch>
            </v-list-tile-action>
            <v-list-tile-title>Go dark !</v-list-tile-title>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-action>
              <v-switch v-model="hints" color="purple"></v-switch>
            </v-list-tile-action>
            <v-list-tile-title>Enable hints</v-list-tile-title>
          </v-list-tile>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat to="/actions">Act now</v-btn>
          <pairs-button/>
          <profiles-button/>
          <v-btn flat>
            <a @click="logout">Logout</a>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import PairsButton from "./PairsButton.vue";
import ProfilesButton from "./ProfilesButton.vue";
export default {
  name: "AccountMenu",
  components: {
    PairsButton,
    ProfilesButton
  },
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
    darkMode: false
  }),
  computed: {
    darkMode: function() {
      return this.$store.getters.darkMode;
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/signin");
      });
    },
    setDarkMode: function() {
      this.$store.commit("setDarkMode");
    }
  }
};
</script>
