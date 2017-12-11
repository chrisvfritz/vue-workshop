import * as AuthenticationApi from 'mock-authentication-api'

const netWorkLatency = 1000
const userStore = [
  {
    id: 1,
    username: 'admin',
    password: 'password',
    name: 'Vue Master',
    token: 'token-to-use-on-authenticated-requests',
  },
]
AuthenticationApi.configure(netWorkLatency, userStore)

export default {
  state: {
    currentUser: null,
    ...getSavedAuth(),
  },
  mutations: {
    SET_CURRENT_USER(state, newValue) {
      state.currentUser = newValue
      saveAuth(state)
    },
  },
  getters: {
    loggedIn(state) {
      return !!state.currentUser
    },
  },
  actions: {
    logIn({ commit, state, getters }, { username, password }) {
      if (getters.loggedIn) return Promise.resolve()

      return AuthenticationApi.authenticate(username, password).then(user => {
        commit('SET_CURRENT_USER', user)
      })
    },
    logOut({ commit }) {
      commit('SET_CURRENT_USER', null)
    },
  },
}

function getSavedAuth() {
  return JSON.parse(window.localStorage.getItem('auth')) || {}
}

function saveAuth(auth) {
  window.localStorage.setItem('auth', JSON.stringify(auth))
}
