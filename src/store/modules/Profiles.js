import { API_URL } from "../config";

const state = { 
  quantity: 0,
  current: {},
  lastUpdate: 0
}

const mutations = { 
  updateProfiles(state, newProfiles){
  state.current = newProfiles
  state.quantity = state.current.length
  state.lastUpdate = Date.now()
},
removeProfile(state, profileID){
state.current.splice(profileID, 1)
state.quantity = state.current.length
}
}

const actions = {

  getProfiles({commit}){
    return new Promise((resolve, reject) => {
      fetch(API_URL.concat('read'), {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(resp =>resp.json())
      .then(newProfiles =>  {
        commit('updateProfiles', newProfiles)
        resolve(newProfiles)
      })
      .catch(err => {
        commit('auth_error', err)
        reject(err)
      })
    })
  },

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