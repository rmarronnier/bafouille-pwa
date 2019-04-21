import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import Auth from './items/Auth'
import User from './items/User'
import Profiles from './items/Profiles'
import Pairs from './items/Pairs'
import Messages from './items/Messages'


Vue.use(Vuex)

const vuexLocal = new VuexPersist({
  key: 'bafouille',
  storage: window.localStorage
})

export default new Vuex.Store({
  modules: {
    auth: Auth,
    user: User,
    profiles: Profiles,
    pairs: Pairs,
    messages: Messages
  },
  state: { },
  mutations: { },
  actions: { },
  getters: { },
  plugins: [vuexLocal.plugin]
})
