import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
  state: {
    csrfToken: ""
  },
  mutations: {
    updateCsrfToken(state, data) {
      state.csrfToken = data
    }
  },
  getters: {
    csrfToken: (state) => {
      return state.csrfToken;
    }
  },
  actions: {
    getCsrfToken({ commit }) {
      console.log("action aget csrftoken");
      axios.get('http://127.0.1/api/v1/csrftoken').then(response => {
        commit('updateCsrfToken', response.data)
      }).catch(err => {
        console.log(err.response.data)
      })
    }
  },
  modules: {
  }
})
