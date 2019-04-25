import { API_URL } from "../config";

const state = { 
  quantity: 0,
  current: {}
}

const mutations = { 
  updateProfiles(state, newProfiles){
  state.current = newProfiles
  state.quantity = newProfiles.length()
},
removeProfile(state, profileID){
state.current.splice(profileID, 1)
state.quantity = state.current.length()
}
}

const actions = {
  reachOut({ commit, dispatch }, profileID) {
    return new Promise((resolve, reject) => {
      fetch(API_URL.concat("reach/").concat(profileID), {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(profileID)})
  .then(resp => {
    commit('removeProfile', profileID)
    resolve(resp)
  })
  .catch(err => {
    dispatch('auth_error')
    reject(err)
  })
})

  },

  blockOut({ commit, dispatch }, profileID) {
    return new Promise((resolve, reject) => {
      fetch(API_URL.concat("blockout/").concat(profileID), {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(profileID)})
  .then(resp => {
    commit('removeProfile', profileID)
    resolve(resp)
  })
  .catch(err => {
    dispatch('auth_error')
    reject(err)
  })
})

  }

}

const getters = {
  current_profiles: state => state.current,
  profiles_quantity: state => state.quantity
}

export default {
  state,
  mutations,
  actions,
  getters
  }