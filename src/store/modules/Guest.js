import ApiService from "@/API/api";

export default {
    state: {
        body: "You'd better change me !",
        letters: [],
        settings: ""
     },
     mutations: {
        updateGuestBody(state, body){
            state.body = body
          },
          updateGuestSettings(state, settings){
            state.body = settings
          },
          updateGuestLetters(state, letters){
              state.letters = letters
          } 
     },
     actions: {
        getLetters({ commit }, body) {
            return new Promise((resolve, reject) => {
              ApiService("getletters", JSON.stringify(body))
                .then(resp => resp.json())
                .then(newLetters => {
                  commit('updateGuestLetters', newLetters.data)
                  resolve(newLetters)
                })
                .catch(err => {
                 // dispatch('flashNotification', err.json().flash)
                  reject(err)
                })
            })
          },
        getLettersByReadability({ commit }, body) {
            return new Promise((resolve, reject) => {
              ApiService("getlettersbyreadability", JSON.stringify(body))
                .then(resp => resp.json())
                .then(newLetters => {
                  commit('updateGuestLetters', newLetters.data)
                  resolve(newLetters)
                })
                .catch(err => {
                 // dispatch('flashNotification', err.json().flash)
                  reject(err)
                })
            })
          },
        getLettersBySentiment({ commit }, body) {
            return new Promise((resolve, reject) => {
              ApiService("getlettersbysentiment", JSON.stringify(body))
                .then(resp => resp.json())
                .then(newLetters => {
                  commit('updateGuestLetters', newLetters.data)
                  resolve(newLetters)
                })
                .catch(err => {
                 // dispatch('flashNotification', err.json().flash)
                  reject(err)
                })
            })
          }
        
     },
     getters: {
        guest_body: state => state.body,
        guest_letters: state => state.letters,
        guest_settings: state => state.settings
     }
    }