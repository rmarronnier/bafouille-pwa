export default {
    state: { 
      quantity: 0,
      current: {}
     },
    mutations: { 
      updatePairs(state, newPairs){
        state.current = newPairs
        state.quantity = newPairs.length()
     }
    },
    actions: {  },
    getters: { 
      current_pairs: state => state.current,
  pairs_quantity: state => state.quantity
     }
  }