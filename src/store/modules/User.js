import ApiService from "@/API/api";

export default {
      state: { 
          body: "You'd better change me !",
          lastUpdate: 0
       },
      mutations: { 
        updateBody(state, body){
          state.body = body
          state.lastUpdate = Date.now()
        }
       },
      actions: {
        changeBody({commit}, newBody){
          return new Promise((resolve, reject) => {
            ApiService("changebody", JSON.stringify(newBody))
            .then(resp =>  {
              commit('updateBody', JSON.stringify(newBody))
              resolve(resp)
            })
            .catch(err => {
              commit('auth_error', err)
              reject(err)
            })
          })
        }
       },
      getters: { 
        user_body: state => state.body,
        userLastUpdate: state => state.lastUpdate
      }
    }