import { API_URL } from "../config";

export default {
    state: { 
      quantity: 0,
      unread_quantity: 0,
      current: {}
     },
    mutations: {
      updateMessages(state, newMessages){
        state.current = newMessages
        state.quantity = newMessages.length
     },
     addMessage(state, newMessage){
       state.current.push(newMessage)
       state.quantity = state.current.length
     }

    },
    actions: {
      postMessage({ commit, dispatch }, body, pairID) {
        return new Promise((resolve, reject) => {
          fetch(API_URL.concat("pair/").concat(pairID), {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)})
      .then(resp => {
        commit('addMessage', {body, pairID})
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
      current_messages: state => state.current,
      messages_quantity: state => state.quantity
    }
  }