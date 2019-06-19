import ApiService from "@/API/api";

export default {
  state: {
    quantity: 0,
    unread_quantity: 0,
    current: {},
    lastUpdate: 0
  },
  mutations: {
    updateMessages(state, newMessages) {
      state.current = newMessages
      state.quantity = state.current.length
      state.lastUpdate = Date.now()
    },
    addMessage(state, newMessage) {
      state.current.push(newMessage)
      state.quantity = state.current.length
    }

  },
  actions: {
    postMessage({ dispatch }, message) {
      return new Promise((resolve, reject) => {
        ApiService("postmessage", message)
        .then(resp =>resp.json())
          .then(rawPairs => {
            dispatch('cleanPairs', rawPairs.data)
            dispatch('flashNotification', rawPairs.flash)
            resolve(rawPairs)
          })
          .catch(err => {
            dispatch('flashNotification', err.json().flash)
            reject(err)
          })
      })

    }
  },
  getters: {
    messages: state => state.current,
    messages_quantity: state => state.quantity,
    messagesLastUpdate: state => state.lastUpdate
  }
}