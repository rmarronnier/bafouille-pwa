<template>
  <section class="pairs">
      <div
        v-for="pair in pairs"
        v-bind:key="pair.id"
      >
        <article>
          {{ pair.users[0].body }}
          <Messages 
  v-bind:messages="pair.messages">
            </Messages>   
          </article>
      </div>
  </section>
</template>

<script>
import Messages from '@/components/Messages.vue'

export default {
    name : 'Pairs',
     computed : {
       pairs : function(){ return this.$store.getters.pairs}
     },
     components: {
    Messages
  }

}
</script>
