<template>
  <div class="read">
      fsdfsdf
      {{ profiles }}
      <div
        v-for="profile in profiles"
        :key="profile.body"
        class="profile"
      >
        <span>aeae{{ profile.body }}</span>
      </div>
  </div>
</template>

<script>
export default {
    name : 'Read'
}
</script>
