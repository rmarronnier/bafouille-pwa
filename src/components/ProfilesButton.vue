<template>
    <v-badge>
      <template v-slot:badge>
        <span>{{ profiles_quantity }}</span>
      </template>
<v-btn flat to="/read">Read</v-btn>
</v-badge>
</template>

<script>
export default {
  name: "ProfilesButton",
  computed: {
    profiles_quantity: function() {
      return this.$store.getters.profiles_quantity
    }
  }
}
</script>