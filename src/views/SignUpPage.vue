<template>
  <div class="signup">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <SignUp />
  </div>
</template>

<script>
// @ is an alias to /src
import SignUp from '@/components/actions/user/SignUp.vue'

export default {
  name: 'signuppage',
  components: {
    SignUp
  }
}
</script>
