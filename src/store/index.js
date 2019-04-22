import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import Auth from './modules/Auth'
import User from './modules/User'
import Profiles from './modules/Profiles'
import Pairs from './modules/Pairs'
import Messages from './modules/Messages'


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
