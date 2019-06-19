<template>
  <section class="read">
      <div
        v-bind:key="profile.id"
      >
      <v-card>
          <Reachout v-bind:profile="profile.id"/>
          <Blockout v-bind:profile="profile.id"/>
         <v-card-text class="profile">{{ profile.body }}</v-card-text> 
         </v-card>
      </div>
  </section>
</template>

<script>
import Reachout from '@/components/actions/profiles/Reachout.vue';
import Blockout from '@/components/actions/profiles/Blockout.vue';
export default {
    name : 'ReadProfiles',
     computed : {
       profile : function(){ return this.$store.getters.profiles[0]}
     },
  components: {
    Reachout,
    Blockout
  }
}
</script>

<style lang="scss">
.v-card__text.profile{
  padding: 6%;
width: 100%;
line-height: 3em;

text-align: left;

font-size: 22px;
}
</style>

