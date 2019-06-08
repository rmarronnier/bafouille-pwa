export default {
    state: {
      notificationText: '',
    },
    mutations: {
setNotification (state, notificationText) {
    state.notificationText = notificationText
}
    },
    getters: {
        notification: state => state.notificationText
    }
}
