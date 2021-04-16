import Vue from 'vue'
import Vuex from 'vuex'
import { mysteries } from '../assets/data'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentMystery: {},
    currentDecade: 0
  },
  mutations: {
    setCurrentMystery(state, payload) {
      state.currentMystery = mysteries[payload]
    },
    setCurrentDecade(state, payload) {
      state.currentDecade = payload
    }
  },
  plugins: [createPersistedState()],
})
