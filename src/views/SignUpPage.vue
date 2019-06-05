<template>
  <div class="signup">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <SignUpSteppers/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignUpSteppers from '@/components/SignUpSteppers.vue'

export default {
  name: 'signuppage',
  components: {
    SignUpSteppers
  }
}
</script>
