import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import './registerServiceWorker'

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
