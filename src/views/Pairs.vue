<template>
  <section class="pairs">
      <div
        v-for="pair in pairs"
        v-bind:key="pair.id"
      >
        <article>{{ pair.users[0].body }}</article>
      </div>
  </section>
</template>

<script>
export default {
    name : 'Pairs',
     computed : {
       pairs : function(){ return this.$store.getters.pairs}
     }
}
</script>
