import ApiService from "@/API/api";

export default {
  state: {
    status: '',
    isLoggedIn: false,
    lastUpdate: 0
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state) {
      state.status = 'logged_in'
      state.isLoggedIn = true
      state.lastUpdate = Date.now()
    },
    auth_error(state) {
      state.status = 'login_error'
      state.isLoggedIn = false
      state.lastUpdate = Date.now()
    },
    logout_request(state) {
      state.status = 'logging_out'
    },
    logout_success(state) {
      state.status = 'logged_out'
      state.isLoggedIn = false
      state.lastUpdate = Date.now()
    },
    logout_error(state) {
      state.status = 'logout_error'
    }
  },
  actions: {
    signin({ commit, dispatch }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        ApiService("signin", JSON.stringify(user))
        .then(resp => resp.json())
          .then(user => {
            commit('auth_success')
            commit('updateUser', user)
            commit('setNotification', 'Welcome back!')
            dispatch('getProfiles')
            //dispatch('updateAll')
            // dispatch('getPairs')
            // dispatch('getMessages')
            resolve(user)
          })
          .catch(err => {
            commit('auth_error')
            commit('setNotification', 'Email or password invalid :/')
            reject(err)
          })
      })
    },

    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        ApiService("register", JSON.stringify(user))
          .then(resp => resp.json())
          .then(profiles => {
            commit('auth_success')
            commit('updateProfiles', profiles)
            resolve(profiles)
          })
          .catch(err => {
            commit('auth_error', err)
            commit('setNotification', 'Something went wrong :/')
            reject(err)
          })
      })
    },

    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout_request')
        ApiService("logout")
          .then(resp => {
            commit('logout_success')
            commit('setNotification', 'See you soon!')
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
    authLastUpdate: state => state.lastUpdate
  }
}