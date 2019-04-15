<template>
 <main class="container ui grid"><h1>Sign In</h1>
<form @submit.prevent="signin">
  <div class="form-group">
    <label>Email</label>
    <input required v-model="email" type="email" name="email" placeholder="Email">
  </div>
  <div class="form-group">
    <label>Password</label>
    <input required v-model="password" type="password" name="password" placeholder="Password">
  </div>
  <button class="btn btn-success btn-sm" type="submit">Sign In</button>
</form>

<hr/>
<router-link to="/signup">Don't have an account yet?</router-link>
</main>
</template>

<script>
export default {
  name: 'SignIn',

   data(){
      return {
        email : "",
        password : ""
      }
    },

    methods: {
      signin: function () {
        let email = this.email 
        let password = this.password
        this.$store.dispatch('signin', { email, password })
       .then(() => this.$router.push('/'))
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
