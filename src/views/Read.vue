<template>
  <div class="read">
      fsdfsdf
      {{ email }}
      <div
        v-for="profile in profiles"
        :[key]="body"
        class="profile"
      >
        <span>{{ profile.body }}</span>
      </div>
  </div>
</template>

<script>
export default {
    name : 'Read',
     computed : {
       profiles : function(){ return this.$store.getters.profiles},
       email : function(){ return this.$store.getters.email}
     }
}
</script>
