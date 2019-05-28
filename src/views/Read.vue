<template>
  <section class="read">
      <div
        v-for="profile in profiles"
        v-bind:key="profile.id"
      >
      <v-card>
          <Reachout v-bind:profile="profile.id"/>
          <Blockout v-bind:profile="profile.id"/>
         <v-card-text>{{ profile.body }}</v-card-text> </v-card>
        
      </div>
  </section>
</template>

<script>
import Reachout from '@/components/Reachout.vue';
import Blockout from '@/components/Blockout.vue';
export default {
    name : 'Read',
     computed : {
       profiles : function(){ return this.$store.getters.profiles}
     },
  components: {
    Reachout,
    Blockout
  }
}
</script>
