import ApiService from "@/API/api";

export default {
  state: {
    quantity: 0,
    current: {},
    lastUpdate: 0
  },
  mutations: {
    updatePairs(state, newPairs) {
      state.current = newPairs
      state.quantity = state.current.length
      state.lastUpdate = Date.now()
    }
  },
  actions: {
    getPairs({ commit, dispatch }) {
      return new Promise((resolve, reject) => {
        ApiService("getpairs")
        .then(resp =>resp.json())
          .then(rawPairs => {
            dispatch('cleanPairs', rawPairs)
            resolve(rawPairs)
          })
          .catch(err => {
            commit('setNotification', 'Updatepairs failed for some reason')
            reject(err)
          })
      })
    },
    cleanPairs({ commit, rootState }, rawPairs) {
      var user_id = rootState.user.id
      rawPairs.forEach(pair => {
pair.users.forEach(user => {
  if (user['id'] == user_id) {
    var pos = pair.users.indexOf(user)
    pair.users.splice(pos, 1)
  }
}
  )
        // var pos = element.users.indexOf(user_id)
        // console.log(pos)
        // pair.users.splice(pos, 1)
      })
      commit('updatePairs', rawPairs);
    }
  },
  getters: {
    pairs: state => state.current,
    pairs_quantity: state => state.quantity,
    pairsLastUpdate: state => state.lastUpdate
  }
}