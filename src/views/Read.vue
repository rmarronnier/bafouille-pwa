<template>
  <section class="read">
      <div
        v-for="profile in profiles"
        v-bind:key="profile.id"
      >
      <v-card>
                    <v-btn
              color="pink"
              dark
              small
              absolute
              bottom
              left
              fab
            >
              <v-icon>add</v-icon>
            </v-btn>
         <v-card-text>{{ profile.body }}</v-card-text> </v-card>
        
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
