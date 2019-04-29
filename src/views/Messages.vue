<template>
  <section class="messages">
      <div
        v-for="message in messages"
        v-bind:key="message.id"
      >
        <article>{{ message.body }}</article>
      </div>
  </section>
</template>

<script>
export default {
    name : 'Messages',
     computed : {
       messages : function(){ return this.$store.getters.messages}
     }
}
</script>
