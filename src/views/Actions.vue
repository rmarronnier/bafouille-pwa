<template>
  <section class="actions">
    <v-tabs grow slider-color="black">
      <v-tab href="#tab-1">
                  <v-badge inline>
          <template v-slot:badge>
            <span>{{ profiles_quantity }}</span>
          </template>
          Profiles
                  </v-badge>
          </v-tab>

      <v-tab href="#tab-2">
        <v-badge inline>
          <template v-slot:badge>
            <span>{{ pairs_quantity }}</span>
          </template>Matches
        </v-badge>
      </v-tab>

      <v-tab href="#tab-3">Your profile</v-tab>

      <v-tab-item :value="'tab-1'">
        <ReadProfiles v-if="profiles_quantity > 0"/>
            <NoProfile v-else/>
      </v-tab-item>

      <v-tab-item :value="'tab-2'">
        <Pairs v-if="pairs_quantity > 0"/>
            <NoMatch v-else/>
      </v-tab-item>

      <v-tab-item :value="'tab-3'">
        <WriteBody/>
      </v-tab-item>
    </v-tabs>
  </section>
</template>

<script>
import ReadProfiles from "@/components/actions/profiles/ReadProfiles.vue"
import Pairs from "@/components/actions/pairs/Pairs.vue"
import WriteBody from "@/components/actions/user/WriteBody.vue"
import NoMatch from "@/components/actions/pairs/NoMatch.vue"
import NoProfile from "@/components/actions/profiles/NoProfile.vue"

export default {
  name: "Actions",
  components: {
    ReadProfiles,
    Pairs,
    WriteBody,
    NoMatch,
    NoProfile
  },
  computed: {
    pairs_quantity: function() {
      return this.$store.getters.pairs_quantity;
    },
    profiles_quantity: function() {
      return this.$store.getters.profiles_quantity;
    }
  }
};
</script>

<style scoped lang="scss">
</style>
