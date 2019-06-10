<template>
  <main class="container ui grid">
    <h1>Sign Up</h1>
    <form @submit.prevent="register">
      <div class="form-group">
        <v-text-field
          v-model="email"
          name="email"
          type="email"
          hint="For example : epresley@area51.us. Note : your email adress won't be sold / communicated to anyone. It's just to eventually save this place from an onslaught of bots."
          required
          label="E-mail"
        ></v-text-field>
      </div>
      <div class="form-group">
        <v-text-field
          v-model="password"
          name="password"
          type="password"
          hint="At least 8 characters. For example : 12345678. No, seriously choose something harder to guess, but in anycase DON'T CHOOSE A PASSWORD USED ELSEWHERE !"
          required
          counter
          :rules="[rules.required, rules.min]"
          label="Password"
        ></v-text-field>
        <v-text-field
          v-model="password_confirmation"
          type="password"
          required
          counter
          :rules="[rules.required, rules.min]"
          label="Confirm Password"
        ></v-text-field>
      </div>
      <v-btn flat type="submit">Sign up</v-btn>
    </form>
    <hr>
    <v-btn flat to="/signin">Already have an account?</v-btn>
  </main>
</template>




<script>
export default {
  name: "SignUp",

  data() {
    return {
      email: "",
      password: "",
      password_confirmation: "",
      // is_admin : null
              rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match')
        }
    };
  },
  methods: {
    register: function() {
      let data = {
        email: this.email,
        password: this.password
        // is_admin: this.is_admin
      };
      this.$store
        .dispatch("register", data)
        // .then(() => this.$router.push("/write"))
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
