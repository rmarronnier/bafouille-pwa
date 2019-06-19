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

  getProfiles({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      ApiService("getprofiles")
        .then(resp => resp.json())
        .then(newProfiles => {
          commit('updateProfiles', newProfiles.data)
          resolve(newProfiles)
        })
        .catch(err => {
          dispatch('flashNotification', err.json().flash)
          reject(err)
        })
    })
  },

  reachOut({ commit, dispatch }, profileID) {
    return new Promise((resolve, reject) => {
      ApiService("reachout", profileID)
      .then(resp =>resp.json())
        .then(response => {
          commit('removeProfile', profileID)
          // if (this.$store.getters.profiles_quantity == 0) {
          //   dispatch('getProfiles')
          //   resolve(resp)
          // }
          dispatch('cleanPairs', response.data)
          dispatch('flashNotification', response.flash)
          resolve(response)
        })
        .catch(err => {
          dispatch('flashNotification', err.json().flash)
          reject(err)
        })
    })

  },

  blockOut({ commit, dispatch }, profileID) {
    return new Promise((resolve, reject) => {
      ApiService("blockout", profileID)
      .then(resp =>resp.json())
      .then(response => {
          commit('removeProfile', profileID)
          // if (this.$store.getters.profiles_quantity == 0) {
          //   dispatch('getProfiles')
          //   resolve(resp)
          // }
          dispatch('cleanPairs', response.data)
          dispatch('flashNotification', response.flash)
          resolve(response)
        })
        .catch(err => {
          dispatch('flashNotification', err.json().flash)
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