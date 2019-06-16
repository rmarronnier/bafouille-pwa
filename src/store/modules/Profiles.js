import ApiService from "@/API/api";

const state = {
  quantity: 0,
  current: {},
  lastUpdate: 0
}

const mutations = {
  updateProfiles(state, newProfiles) {
    state.current = newProfiles
    state.quantity = state.current.length
    state.lastUpdate = Date.now()
  },
  removeProfile(state, profileID) {
    state.current.splice(profileID, 1)
    state.quantity = state.current.length
  }
}

const actions = {

  getProfiles({ commit }) {
    return new Promise((resolve, reject) => {
      ApiService("getprofiles")
        .then(resp => resp.json())
        .then(newProfiles => {
          commit('updateProfiles', newProfiles)
          resolve(newProfiles)
        })
        .catch(err => {
          commit('setNotification', 'Getting new profiles failed')
          reject(err)
        })
    })
  },

  reachOut({ commit, dispatch }, profileID) {
    return new Promise((resolve, reject) => {
      ApiService("reachout", profileID)
        .then(resp => {
          commit('removeProfile', profileID)
          commit('setNotification', 'You reached this person. Congrats !')
          if (this.$store.getters.profiles_quantity == 0) {
            dispatch('getProfiles')
            dispatch('getPairs')
          }
          resolve(resp)
        })
        .catch(err => {
          commit('setNotification', 'Reaching out failed')
          reject(err)
        })
    })

  },

  blockOut({ commit, dispatch }, profileID) {
    return new Promise((resolve, reject) => {
      ApiService("blockout", profileID)
        .then(resp => {
          commit('removeProfile', profileID)
          commit('setNotification', 'You blocked out one bugger, well done !')
          if (this.$store.getters.profiles_quantity == 0) {
            dispatch('getProfiles')
            dispatch('getPairs')
          }
          resolve(resp)
        })
        .catch(err => {
          commit('setNotification', 'Blocking out failed')
          reject(err)
        })
    })

  }

}

const getters = {
  profiles: state => state.current,
  profiles_quantity: state => state.quantity,
  profilesLastUpdate: state => state.lastUpdate
}

export default {
  state,
  mutations,
  actions,
  getters
}