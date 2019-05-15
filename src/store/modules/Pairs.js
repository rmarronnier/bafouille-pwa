import ApiService from "@/API/api";

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
      getPairs({commit, rootState }){
        return new Promise((resolve, reject) => {
          ApiService("getpairs")
          .then(resp =>resp.json())
          .then(newPairs =>  {
            var user_id = rootState.user.user_id
            newPairs.forEach(element => {
              var pos = element.users.indexOf(user_id)
              element.users.splice(pos, 1)
            });
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