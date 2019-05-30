export default {
    state: {
      darkMode: false
    },
    mutations: {
setDarkMode (state) {
    state.darkMode = !state.darkMode
}
    },
    getters: {
      darkMode: state => state.darkMode
    }
}
