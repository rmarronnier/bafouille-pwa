import ApiService from "@/API/api";

export default {
      state: {
          id: Number, 
          body: "You'd better change me !",
          bodyHTML: "<p>You'd better change me !</p>",
          lastUpdate: 0
       },
      mutations: {
        updateUser(state, user){
          state.id = user.id
          state.body = user.body
          state.lastUpdate = Date.now()
        }, 
        updateBody(state, body){
          state.body = body
          state.lastUpdate = Date.now()
        },
        updateBodyHTML(state, bodyHTML){
          state.bodyHTML = bodyHTML
          state.lastUpdate = Date.now()
        }
       },
      actions: {
/*        updateAll({}){
          return new Promise((resolve, reject) => {
            ApiService("me")
            .then(resp =>  resp.json())
            .then(data => {
               //commit('updateUser', )
               //dispatch('cleanPairs', )
              resolve(data)
            })
            .catch(err => {
              //commit('auth_error', err)
              reject(err)
            })
          })
          }, */
        changeBody({commit, dispatch}, newBody){
          return new Promise((resolve, reject) => {
            ApiService("changebody", JSON.stringify(newBody))
            .then(resp =>  resp.json())
              .then (userdb => {
              commit('updateBody', userdb.data.body)
              dispatch('flashNotification', userdb.flash)
              //commit('updateBodyHTML', JSON.stringify(resp["bodyHTML"]))
              dispatch('getProfiles')
              dispatch('getPairs')
              resolve(userdb)
            })
            .catch(err => {
              dispatch('flashNotification', err.json().flash)
              reject(err)
            })
          })
        }
       },
      getters: { 
        user_id: state => state.id,
        user_body: state => state.body,
        user_body_html: state => state.bodyHTML,
        userLastUpdate: state => state.lastUpdate
      }
    }