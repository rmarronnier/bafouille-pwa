<template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
      Select an app
      <small>Summarize if needed</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <SignUp />
      <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">Configure analytics for this app</v-stepper-step>

    <v-stepper-content step="2">
      <WriteBody />
      <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>
    
  </v-stepper>
</template>

<script>
import SignUp from '@/components/SignUp.vue'
import WriteBody from "@/components/WriteBody.vue"
export default {
  name: "SignUpSteppers",
    components: {
    SignUp,
    WriteBody
  },
  data () {
      return {
        e6: 1
      }
    }
}
</script>
