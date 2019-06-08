<template>
  <div class="text-xs-center">
    <v-menu v-model="menu" :close-on-content-click="false">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on">Menu</v-btn>
      </template>
      <v-card>
                <v-list>
                    <v-list-tile >
            <v-list-tile-content>
          <v-btn flat v-if="!isLoggedIn" to="/signup">Sign up</v-btn>
<v-btn flat v-if="isLoggedIn" to="/actions">Action !</v-btn>
                      </v-list-tile-content>
          </v-list-tile>
                            <v-list-tile >
            <v-list-tile-content>
                    <v-btn flat v-if="!isLoggedIn" to="/signin">Sign in</v-btn>
                              <v-btn v-if="isLoggedIn" flat>
            <a @click="logout">Logout</a>
          </v-btn>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <!-- <v-divider></v-divider>

        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-switch :value="darkMode" @input="setDarkMode"></v-switch>
            </v-list-tile-action>
            <v-list-tile-title>Go dark !</v-list-tile-title>
          </v-list-tile>

        </v-list> -->

      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "AccountMenu",
  components: {
  },
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
    darkMode: false
  }),
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn
    },
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
