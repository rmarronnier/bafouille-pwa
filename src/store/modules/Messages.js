import ApiService from "@/API/api";

export default {
    state: { 
      quantity: 0,
      unread_quantity: 0,
      current: {},
      lastUpdate: 0
     },
    mutations: {
      updateMessages(state, newMessages){
        state.current = newMessages
        state.quantity = state.current.length
        state.lastUpdate = Date.now()
     },
     addMessage(state, newMessage){
       state.current.push(newMessage)
       state.quantity = state.current.length
     }

    },
    actions: {
      getMessages({commit}, pair_id){
        return new Promise((resolve, reject) => {
          ApiService("getmessages", pair_id)
          .then(resp =>resp.json())
          .then(newMessages =>  {
            commit('updateMessages', newMessages)
            resolve(newMessages)
          })
          .catch(err => {
            commit('auth_error', err)
            reject(err)
          })
        })
      },
      postMessage({ commit, dispatch }, message) {
        return new Promise((resolve, reject) => {
          ApiService("postmessage", message)
      .then(resp => {
        commit('addMessage', message)
        resolve(resp)
      })
      .catch(err => {
        dispatch('auth_error')
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