import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store/'
import './registerServiceWorker'
import 'vuetify/dist/vuetify.min.css'
import VueMoment from 'vue-moment'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

Vue.use(Vuetify, VueMoment,
  {
    iconfont: 'mdi'
  })

Vue.config.productionTip = false

  // router.beforeEach((to, from, next) => {
  //   if(to.matched.some(record => record.meta.requiresAuth)) {
  //     if (store.getters.isLoggedIn) {
  //       next()
  //       return
  //     }
  //     next('/signin') 
  //   } else {
  //     next() 
  //   }
  // })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
