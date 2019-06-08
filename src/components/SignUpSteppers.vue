<template>
  <v-stepper v-model="stepConstraint" vertical>
    <v-stepper-step :complete="stepConstraint > 1" step="1">
      Open yet another account on the Internet
      <small>Free as love can be</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <SignUp />
    </v-stepper-content>

    <v-stepper-step :complete="stepConstraint > 2" step="2">Time to be inspired</v-stepper-step>

    <v-stepper-content step="2">
      <WriteBody />
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
  
  computed: {
    accountCreated: function() {
           return (this.$store.getters.profilesLastUpdate > 0)
    },
    bodyUpdated: function() {
      return (this.$store.getters.userLastUpdate > this.$store.getters.authLastUpdate)
    },
    stepConstraint: function() {
        if (this.accountCreated && !this.bodyUpdated) {
return 2
        }
        else if (this.accountCreated && this.bodyUpdated) {
            return 3
        }
        else {
            return 1
        }

    }
  }
}
</script>
