const state = { 
  quantity: 0,
  current: {}
}

const mutations = { 
  updateProfiles(state, newProfiles){
  state.profiles.current = newProfiles
}
}

const actions = {

}

const getters = {
  current_profiles: state => state.profiles.current
}

export default {
  state,
  mutations,
  actions,
  getters
  }