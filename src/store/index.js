import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import Auth from './modules/Auth'
import User from './modules/User'
import Profiles from './modules/Profiles'
import Pairs from './modules/Pairs'
import Messages from './modules/Messages'
import Notifications from './modules/Notifications'
import Configuration from './modules/Configuration'


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
    messages: Messages,
    notifications: Notifications,
    configuration: Configuration
  },
  state: { },
  mutations: { },
  actions: { },
  getters: { },
  plugins: [vuexLocal.plugin]
})
