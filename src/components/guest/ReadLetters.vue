<template>
  <section class="read">
      <div
        v-bind:key="letter.id"
      >
      <v-card>
         <v-card-text class="letter">{{ letter.body }}</v-card-text> 
         </v-card>
      </div>
  </section>
</template>

<script>
export default {
    name : 'ReadLetters',
     computed : {
       letter : function(){ return this.$store.getters.guest_letters[0]}
     },
  components: {

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

