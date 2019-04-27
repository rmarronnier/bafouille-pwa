import { API_URL } from "../config";

export default {
    state: { 
      quantity: 0,
      current: {},
      lastUpdate: 0
     },
    mutations: { 
      updatePairs(state, newPairs){
        state.current = newPairs
        state.quantity = newPairs.length()
        state.lastUpdate = Date.now()
     }
    },
    actions: { 
      getPairs({commit}){
        return new Promise((resolve, reject) => {
          fetch(API_URL.concat('registration'), {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
          .then(resp =>resp.json())
          .then(newPairs =>  {
            commit('updatePairs', newPairs)
          })
          .catch(err => {
            commit('auth_error', err)
            reject(err)
          })
        })
      }
     },
    getters: { 
      current_pairs: state => state.current,
      pairs_quantity: state => state.quantity,
      lastUpdate: state => state.lastUpdate
     }
  }