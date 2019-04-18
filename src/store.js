import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'


Vue.use(Vuex)

const vuexLocal = new VuexPersist({
  key: 'bafouille',
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    status: '',
    isLoggedIn: false,
    user : {}
  },
  mutations: {

    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, user){
      state.status = 'logged_in'
      state.isLoggedIn = true
      state.user = user
    },
    auth_error(state){
      state.status = 'login_error'
    },
    logout_request(state){
      state.status = 'logging_out'
    },
    logout_success(state){
      state.status = 'logged_out'
      state.isLoggedIn = false
    },
    logout_error(state){
      state.status = 'logout_error'
    },
    profiles(state, profiles){
      state.user.profiles = profiles
    }

  },
  actions: {

    signin({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        fetch('https://www.bafouille.org/api/session', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)})
        .then(resp => {
          // const user = resp.data.user
          // commit('auth_success', user)
          commit('auth_success', user)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          reject(err)
        })
      })
  },

  register({commit}, user){
    return new Promise((resolve, reject) => {
      commit('auth_request')
      fetch('https://www.bafouille.org/api/registration', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)})
      .then(resp =>resp.json())
      .then(profiles =>  {
        // const user = resp.data.user
        commit('auth_success', user)
        // commit('auth_success', user)
        commit('profiles', profiles)
      })
      .catch(err => {
        commit('auth_error', err)
        reject(err)
      })
    })
  },

  logout({commit}){
    return new Promise((resolve, reject) => {
      commit('logout_request')
      fetch('https://www.bafouille.org/api/signout', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
          })
      .then(resp => {
        commit('logout_success')
        resolve(resp)
      })
      .catch(err => {
        commit('logout_error', err)
        reject(err)
      })
    })
  }

  },
  getters : {
    authStatus: state => state.status,
    isLoggedIn: state => state.isLoggedIn,
    profiles: state => state.user.profiles,
    email: state => state.user.email
  },
  plugins: [vuexLocal.plugin]
})
