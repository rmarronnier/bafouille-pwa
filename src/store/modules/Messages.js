import { API_URL } from "../config";

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
      getMessages({commit}){
        return new Promise((resolve, reject) => {
          fetch(API_URL.concat('correspondences'), {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
          .then(resp =>resp.json())
          .then(newMessages =>  {
            commit('updateMessages', newMessages)
          })
          .catch(err => {
            commit('auth_error', err)
            reject(err)
          })
        })
      },
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
        commit('addMessage', { body, pairID })
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
      messages_quantity: state => state.quantity,
      messagesLastUpdate: state => state.lastUpdate
    }
  }