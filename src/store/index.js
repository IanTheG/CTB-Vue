import Vue from 'vue'
import Vuex from 'vuex'
import { mysteries } from '../assets/data'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentMystery: {},
    darkMode: false
  },
  mutations: {
    setCurrentMystery(state, payload) {
      state.currentMystery = mysteries[payload]
    },
    setDarkMode(state, payload) {
      // False: light mode, True: dark mode
      state.darkMode = payload
    }
  },
  plugins: [createPersistedState()],
})
