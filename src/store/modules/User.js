import ApiService from "@/API/api";

export default {
      state: { 
          body: "You'd better change me !",
          bodyHTML: "<p>You'd better change me !</p>",
          lastUpdate: 0
       },
      mutations: { 
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
        changeBody({commit}, newBody){
          return new Promise((resolve, reject) => {
            ApiService("changebody", JSON.stringify(newBody))
            .then(resp =>  resp.json())
              .then (body => {
              commit('updateBody', body)
              //commit('updateBodyHTML', JSON.stringify(resp["bodyHTML"]))
              resolve(body)
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
        user_body_html: state => state.bodyHTML,
        userLastUpdate: state => state.lastUpdate
      }
    }