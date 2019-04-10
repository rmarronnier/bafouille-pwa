<template>
 <main class="container ui grid"><h1>Sign In</h1>
<form action="https://bafouille.org/api/session" method="post">
  <div class="form-group">
    <input class="form-control" type="email" name="email" placeholder="Email">
  </div>
  <div class="form-group">
    <input class="form-control" type="password" name="password" placeholder="Password">
  </div>
  <button class="btn btn-success btn-sm" type="submit">Sign In</button>
</form>
<hr/>
<router-link to="/signup">Don't have an account yet?</router-link>
</template>

<script>
export default {
  name: 'SignIn'
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
