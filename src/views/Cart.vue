<template>
  <div class="cart-main">
    <Header />
    <div class="cart-product-list">
      <ul class="cart-products-ul">
        <li class="cart-products-li" v-for="item in selectedProducts" :key="item.pro_id">
          <span class="cart-product-item"> {{ item.pro_name }} </span>
          <span class="cart-product-item"> 剩余: {{ item.remaining_product }} </span>
          <span class="cart-product-item"> 单价: {{ item.price }} </span>
          <button @click="handleSubProduct(item)"> - </button>
          <span class="cart-product-item"> {{ item.selected_count }} </span>
          <button @click="handleAddProduct(item)"> + </button>
        </li>
      </ul>
    </div>
    <div class="cart-footer">
      <div class="cart-footer-submit-product">
        <span>总计: {{tmpTotalPrice}} </span>
        <button> <router-link to="/settle">立即结算</router-link> </button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/common/Header'
import { accAdd, accMul } from '../utils/calculate'
// import { getCartProductList } from '../api/cart_api'

export default {
  data () {
    return {
      selectedProducts: [],
      successCode: Number(process.env.VUE_APP_SUCCESS_CODE)
    }
  },
  components: {
    Header
  },
  created: function () {
    this.initCartProduct()
  },
  computed: {
    tmpTotalPrice () {
      let tmpPrice = 0.00
      if (Array.isArray(this.selectedProducts)) {
        this.selectedProducts.forEach(element => {
          if (Math.round(element.selected_count) === element.selected_count &&
          element.selected_count > 0 &&
          element.price > 0) {
            tmpPrice = accAdd(tmpPrice, accMul(element.selected_count, element.price))
          }
        })
      }
      return tmpPrice
    }
  },
  methods: {
    async initCartProduct () {
      // const userId = this.$store.getters.getUserId
      // const res = await getCartProductList({ userId: userId })
      const res = {
        code: 200,
        msg: 'success',
        data: [
          { pro_id: 1, pro_name: '苹果', remaining_product: 200, price: 2.88, selected_count: 2 },
          { pro_id: 2, pro_name: '樱桃', remaining_product: 100, price: 5.63, selected_count: 2 }
        ]
      }
      if (res.code === this.successCode) {
        this.selectedProducts = res.data
      } else {
        this.selectedProducts = []
      }
      this.$store.dispatch('setSelectedProducts', { selectedProducts: this.selectedProducts })
    },
    handleSubProduct (item) {
      if (item.selected_count <= 1) {
        alert('不能更少了')
        return
      }
      item.remaining_product = item.remaining_product + 1
      item.selected_count = item.selected_count - 1
      this.$store.dispatch('setSelectedProducts', { selectedProducts: this.selectedProducts })
    },
    handleAddProduct (item) {
      if (item.remaining_product < 1) {
        alert('库存不足')
        return
      }
      item.remaining_product = item.remaining_product - 1
      item.selected_count = item.selected_count + 1
      this.$store.dispatch('setSelectedProducts', { selectedProducts: this.selectedProducts })
    }
  }
}
</script>

<style>
  .cart-products-li {
    list-style: none;
  }
  .cart-product-item {
    padding: 10px;
  }
  .cart-footer {
    position: absolute;
    height: 48px;
    width: 100%;
    bottom: 0%;
  }
  .cart-footer-submit-product {
    position: absolute;
    background-color:rgb(207, 197, 197);
    top: 30%;
    right: 0%;
    width: 40%;
    height: 50%;
  }
  .cart-footer-submit-product span {
    padding-right: 55px;
  }
  .cart-footer-submit-product button {
    position: absolute;
    right: 10%;
  }
</style>
