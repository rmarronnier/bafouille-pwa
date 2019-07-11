<template>
  <section class="read">
      <div
        v-bind:key="letter[0].id"
      >
      <v-card>
<NextLetterButton />
         <v-card-text class="letter">{{ letter[0].body }}</v-card-text> 
         </v-card>
      </div>
  </section>
</template>

<script>
import NextLetterButton from '@/components/guest/NextLetterButton.vue';
export default {
    name : 'ReadLetters',
     computed : {
       letter : function(){ return this.$store.getters.guest_letters}
     },
  components: {
NextLetterButton
  }
}
</script>

<style lang="scss">
.v-card__text.letter{
  padding: 6%;
width: 100%;
line-height: 3em;

text-align: left;

font-size: 22px;
}
</style>

