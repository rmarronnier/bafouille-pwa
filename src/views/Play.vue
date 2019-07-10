<template>
  <section class="actions">
    <v-tabs grow slider-color="black">

<v-tab href="#tab-1">Your text</v-tab>

      <v-tab href="#tab-2">
                  <v-badge inline>
          Letters
                  </v-badge>
          </v-tab>

      <v-tab-item :value="'tab-1'">
        <GuestBody/>
      </v-tab-item>

      <v-tab-item :value="'tab-2'">
        <ReadLetters v-if="letters_quantity > 0"/>
            <NoProfile v-else/>
      </v-tab-item>

    </v-tabs>
  </section>
</template>

<script>
import GuestBody from "@/components/guest/GuestBody.vue"
import ReadLetters from "@/components/guest/ReadLetters.vue"

export default {
  name: "Play",
  components: {
        GuestBody,
        ReadLetters
  },
  computed: {
    letters_quantity: function() {
      return this.$store.getters.guest_letters;
    }
  }
};
</script>

<style scoped lang="scss">
</style>
