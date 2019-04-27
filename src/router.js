import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Read from './views/Read.vue'
import Pairs from './views/Pairs.vue'
import SignUpPage from './views/SignUpPage.vue'
import SignInPage from './views/SignInPage.vue'

Vue.use(Router)


export default new Router({

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/read',
      name: 'read',
      component: Read,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/pairs',
      name: 'pairs',
      component: Pairs,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'signuppage',
      component: SignUpPage
    },
    {
      path: '/signin',
      name: 'signinpage',
      component: SignInPage
    }
  ]
})
