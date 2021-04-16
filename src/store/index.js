import Vue from 'vue'
import Vuex from 'vuex'
import { mysteries } from '../assets/data'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentMystery: {},
    darkMode: false,
    images: []
  },
  mutations: {
    setCurrentMystery(state, payload) {
      state.currentMystery = mysteries[payload]
    },
    setDarkMode(state, payload) {
      // False: light mode, True: dark mode
      state.darkMode = payload
    },
    setImages(state, payload) {
      const chosenMystery = mysteries[payload]
      let size = 'S'
      if (window.innerHeight > 900) size = 'M'
      if (window.innerHeight > 1200) size = 'L'

      state.images = chosenMystery.decades.map((decade) => {
        return {
          url: `https://connectingthebeads-images.s3.amazonaws.com/${chosenMystery.id}/${decade.id}${size}.jpg`,
          alt: decade.name
        }
      })
    }
  },
  plugins: [createPersistedState()],
})
