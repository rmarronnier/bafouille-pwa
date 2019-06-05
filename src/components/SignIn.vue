<template>
  <main class="container ui grid">
    <h1>Sign In</h1>
    <form @submit.prevent="signin">
      <div class="form-group">
        <v-text-field v-model="email" name="email" type="email" required autofocus label="E-mail"></v-text-field>
      </div>
      <div class="form-group">
        <v-text-field
          v-model="password"
          name="password"
          type="password"
          hint="For example : 123456"
          required
          label="Password"
        ></v-text-field>
      </div>
      <v-btn flat type="submit">Sign In</v-btn>
    </form>

    <v-btn flat to="/signup">Don't have an account yet?</v-btn>
  </main>
</template>

<script>
export default {
  name: "SignIn",

  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    signin: function() {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("signin", { email, password })
        .then(() => this.$router.push("/actions"))
        .catch(err => err);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
