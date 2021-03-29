import { createStore } from 'vuex'
import { isNumber } from '../utils/validate'
// import { saveCartProductList } from '../api/cart_api'

export default createStore({
  state: {
    userId: 0,
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
  actions: {
    async setSelectedProducts ({ commit, state }, payload) {
      commit('setSelectedProducts', payload)
      // 购物车列表商品变化 同步服务器
      // if (Array.isArray(payload.selectedProducts) && payload.selectedProducts.length > 0) {
      //   const params = { cart_product: payload.selectedProducts, user_id: state.userId }
      //   await saveCartProductList(params)
      // }
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
