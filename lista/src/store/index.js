import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    list: [
      'Assistir a um filme',
      'Fazer compras'
    ]
  },
  getters: {
    intens(state) { return state.list.reverse() }
  },
  mutations: {
    adicionar(state, tarefas) {
      state.list.unshift(tarefas)
    },
    remover(state, index) {
      state.list.splice(index, 1)
    }
  },
  actions: {
    adicionarTarefa({ commit }, tarefas) { 
      commit('adicionar', tarefas) 
    },

    removerTarefa({ commit }, tarefas) {
      commit('remover', tarefas)
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
