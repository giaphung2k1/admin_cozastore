import Vue from 'vue'
import Vuex from 'vuex'
import auth from './moduleAuth'
import category from './moduleCategory'
import layout from './moduleLayout';
import permission from './modulePermission'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading:false
  },
  mutations: {
    SET_LOADING: (state, loading = false) => {
      state.isLoading = loading;
  }

  },
  actions: {
    setLoading({ commit }, loading = false) {
      commit('SET_LOADING', loading)
  }
  },
  modules: {
      auth,
      category,
      layout,
      permission
  }
})
