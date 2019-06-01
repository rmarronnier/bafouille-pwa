<template>
  <section class="pairs">
    <div v-for="pair in pairs" v-bind:key="pair.id">
      <article>
        {{ pair.users.body }}
        <Messages v-bind:messages="pair.messages"></Messages>
        <WriteMessage v-bind:pair_id="pair.id"></WriteMessage>
      </article>
    </div>
  </section>
</template>

<script>
import Messages from './Messages.vue';
import WriteMessage from './WriteMessage.vue';

export default {
  name: "Pairs",
  computed: {
    pairs: function() {
      return this.$store.getters.pairs;
    }
  },
  components: {
    Messages,
    WriteMessage
  }
}
</script>
