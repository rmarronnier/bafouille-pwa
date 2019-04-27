import { API_URL } from "../config";

export default {
  state: {     
  status: '',
  isLoggedIn: false ,
  lastUpdate: 0
},
  mutations: { 
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state){
      state.status = 'logged_in'
      state.isLoggedIn = true
      state.lastUpdate = Date.now()
    },
    auth_error(state){
      state.status = 'login_error'
      state.isLoggedIn = false
      state.lastUpdate = Date.now()
    },
    logout_request(state){
      state.status = 'logging_out'
    },
    logout_success(state){
      state.status = 'logged_out'
      state.isLoggedIn = false
      state.lastUpdate = Date.now()
    },
    logout_error(state){
      state.status = 'logout_error'
    }
   },
  actions: { 
    signin({commit, dispatch}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        fetch(API_URL.concat("session"), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)})
        .then(resp => {
          commit('auth_success', user)
          dispatch('getProfiles')
          dispatch('getPairs')
          dispatch('getMessages')
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
      fetch(API_URL.concat('registration'), {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)})
      .then(resp =>resp.json())
      .then(profiles =>  {
        commit('auth_success', user)
        commit('updateProfiles', profiles)
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
      fetch(API_URL.concat('signout'), {
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
  getters: { 
    authStatus: state => state.status,
    isLoggedIn: state => state.isLoggedIn,
    lastUpdate: state => state.lastUpdate
   }
}