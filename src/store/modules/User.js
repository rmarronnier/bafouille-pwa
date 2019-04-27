import { API_URL } from "../config";

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
            fetch(API_URL.concat('write'), {
              method: 'PATCH',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(newBody)})
            .then(resp =>resp.json())
            .then(resp =>  {
              commit('updateBody', newBody)
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