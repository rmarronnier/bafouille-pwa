<template>
  <div class="signin">
    <SignIn/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignIn from '@/components/SignIn.vue'

export default {
  name: 'signinpage',
  components: {
    SignIn
  }
}
</script>
