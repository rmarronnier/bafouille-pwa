<template>
    <main class="container ui grid"><h1>Sign Up</h1>
<form @submit.prevent="register">
  <div class="form-group">
    <label for="email" >E-Mail Address</label>
    <input id="email" type="email" name="email" placeholder="Email" v-model="email" required autofocus>
  </div>
  <div class="form-group">
    <input class="form-control" id="password" type="password" name="password" placeholder="Password"  v-model="password" required>
    <label for="password-confirm">Confirm Password</label>
    <input id="password-confirm" type="password" v-model="password_confirmation" required>
  </div>
  <button class="btn btn-success btn-sm" type="submit">
    Register
  </button>
</form>


<hr/>
<router-link to="/signin">Already have an account?</router-link>
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
       .then(() => this.$router.push('/read'))
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
