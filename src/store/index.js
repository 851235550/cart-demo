import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedProducts: []
  },
  mutations: {
    setSelectedProducts (state, payload) {
      state.selectedProducts = payload.selectedProducts
      if (Array.isArray(payload.selectedProducts) && payload.selectedProducts.length > 0) {
        state.selectedProducts = payload.selectedProducts
      } else {
        state.selectedProducts = []
      }
    }
  },
  getters: {
    getSelectProducts: state => {
      return state.selectedProducts
    }
  }
})
