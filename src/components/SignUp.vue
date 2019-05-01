<template>
    <main class="container ui grid"><h1>Sign Up</h1>
<form @submit.prevent="register">
  <div class="form-group">
          <v-text-field
            v-model="email"
            name="email"
            type="email"
            hint="For example : epresley@area51.us"
            required
            label="E-mail"
          ></v-text-field>
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
                            <v-text-field
            v-model="password_confirmation"
            type="password"
            required
            label="Confirm Password"
          ></v-text-field>
  </div>
  <v-btn flat type="submit">Sign up</v-btn>
</form>


<hr/>
<v-btn flat to="/signin">Already have an account?</v-btn>
</main>

</template>




<script>
export default {
  name: 'SignUp',

      data(){
      return {
        email : "",
        password : "",
        password_confirmation : "",
        // is_admin : null
      }
    },
        methods: {
      register: function () {
        let data = {
          email: this.email,
          password: this.password,
          // is_admin: this.is_admin
        }
        this.$store.dispatch('register', data)
       .then(() => this.$router.push('/write'))
       .catch(err => console.log(err))
      }
    }
}
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
