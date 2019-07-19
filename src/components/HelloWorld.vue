<template>
  <div class="hello">
<h1 id="bafouille">Bafouille</h1>
<h2 id="homepage">Homepage</h2>
<blockquote>
<p>[bafuje] <em>Arg. f.</em>  Lettre, missive. Synon. <em>babille, babillarde, bafouillarde</em></p>
</blockquote>

<v-card>
  <v-card-text>

<p>Craving for well crafted letters ? Overfed with pictures ? Missing genuine link with a real person ? Tired of playing a game ?</p>
<p>You are on a text-based dating* web app.</p>
<p>You can&#39;t post pictures.</p>
<p>You can&#39;t chat.</p>
<p>(Unless you&#39;re corresponding with a bot, there&#39;s a 24 hours waiting period.)</p>
<p>You can&#39;t search or filter profiles.</p>
<p>(There is no search bar but we can analyze your profile characteristics and show you only relevant profiles)</p>
<p>It&#39;s free*</p>
<p>Well, nothing is free in life. It&#39;s free for you, but <em>I</em> have to pay the server bills.</p>
<p>You can also have a look at the MIT licensed <a href="github.com/rmarronnier/bafouille-pwa">front-end code</a>. Release of the back-end code is for later. Promised !</p>
<p>(and we won&#39;t sell your data. we will delete it if you don&#39;t use your account for 30 days though).</p>
<p>Sign me up (or sign in with an existing account)</p>
<p>Or... receive bot generated missives in our playground (no sign up required !)</p>
<v-btn x-large v-if="!isLoggedIn" to="/signup">Sign up</v-btn>
<hr>
<p>Made with :coffee:, :baguette_bread: and :cheese: by <a href="remy.marronnier.dev">Rémy Marronnier</a></p>
  </v-card-text>
</v-card>


  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
computed: {
  isLoggedIn: function() {
      return this.$store.getters.isLoggedIn
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
