export default {
    state: {
      notificationText: '',
    },
    mutations: {
setNotification (state, notificationText) {
    state.notificationText = notificationText
}
    },
    actions: {
        flashNotification ({commit}, flashObject) {
            Object.entries(flashObject).forEach(([key, value]) => 
                commit('setNotification', value)
        )
    }
},
    getters: {
        notification: state => state.notificationText
    }
}
