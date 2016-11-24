import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    maskState: false,
    maskData: {}
  },
  mutations: {
    CHANGEMASKSTATE (state, maskState) {
      state.maskState = maskState
    },
    CHANGEMASKDATA (state, data) {
      state.maskData = data
    }
  }
})

export default store
