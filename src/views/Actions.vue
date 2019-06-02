<template>
  <section class="actions">
    <v-tabs centered slider-color="black">
      <v-tab href="#tab-1">Profiles</v-tab>

      <v-tab href="#tab-2">Matches</v-tab>

      <v-tab href="#tab-3">Your profile</v-tab>

      <v-tab-item :value="'tab-1'">
        <ReadProfiles/>
      </v-tab-item>

      <v-tab-item :value="'tab-2'">
        <Pairs/>
      </v-tab-item>

      <v-tab-item :value="'tab-3'">
        <WriteBody/>
      </v-tab-item>
    </v-tabs>
  </section>
</template>

<script>
import ReadProfiles from "@/components/ReadProfiles.vue";
import Pairs from "@/components/Pairs.vue";
import WriteBody from "@/components/WriteBody.vue";

export default {
  name: "Actions",
  components: {
    ReadProfiles,
    Pairs,
    WriteBody
  }
};
</script>

<style lang="scss">
</style>
