<template>
    <v-badge>
      <template v-slot:badge>
        <span>{{ pairs_quantity }}</span>
      </template>
<v-btn flat to="/pairs">Pairs</v-btn>
</v-badge>
</template>

<script>
export default {
  name: "PairsButton",
  computed: {
    pairs_quantity: function() {
      return this.$store.getters.pairs_quantity
    }
  }
}
</script>