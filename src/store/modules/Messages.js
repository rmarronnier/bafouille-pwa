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
    postMessage({ commit, dispatch }, message) {
      return new Promise((resolve, reject) => {
        ApiService("postmessage", message)
        .then(resp =>resp.json())
          .then(rawPairs => {
            dispatch('cleanPairs', rawPairs)
            commit('setNotification', 'Message sent !')
            resolve(rawPairs)
          })
          .catch(err => {
            commit('setNotification', 'Sending message failed...')
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