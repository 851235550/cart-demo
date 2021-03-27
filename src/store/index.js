import { createStore } from 'vuex'
import { isNumber } from '../utils/validate'

export default createStore({
  state: {
    userId: Number,
    selectedProducts: []
  },
  mutations: {
    setUserId (state, payload) {
      if (isNumber(payload.userId)) {
        state.userId = payload.userId
      } else {
        state.userId = 0
      }
    },
    setSelectedProducts (state, payload) {
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
    },
    getUserId: state => {
      return state.userId
    }
  }
})
