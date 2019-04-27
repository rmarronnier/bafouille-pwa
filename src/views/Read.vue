<template>
  <section class="read">
      <div
        v-for="profile in profiles"
        v-bind:key="profile.id"
      >
        <article>{{ profile.body }}</article>
      </div>
  </section>
</template>

<script>
export default {
    name : 'Read',
     computed : {
       profiles : function(){ return this.$store.getters.profiles}
     }
}
</script>
