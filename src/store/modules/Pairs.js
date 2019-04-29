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
        state.quantity = state.current.length
        state.lastUpdate = Date.now()
     }
    },
    actions: { 
      getPairs({commit}){
        return new Promise((resolve, reject) => {
          fetch(API_URL.concat('pairs'), {
            credentials: 'include',
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
          .then(resp =>resp.json())
          .then(newPairs =>  {
            commit('updatePairs', newPairs)
            resolve(newPairs)
          })
          .catch(err => {
            commit('auth_error', err)
            reject(err)
          })
        })
      }
     },
    getters: { 
      pairs: state => state.current,
      pairs_quantity: state => state.quantity,
      pairsLastUpdate: state => state.lastUpdate
     }
  }