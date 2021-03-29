<template>
  <div>
    <Header />
    <div>
      <ul>
        <li class="cart-products-li" v-for="item in selectedProducts" :key="item.pro_id">
          <span class="cart-product-item"> {{ item.pro_name }} </span>
          <span class="cart-product-item"> {{ item.price }} </span>
          <span> * </span>
          <span class="cart-product-item"> {{ item.selected_count }} </span>
        </li>
      </ul>
    </div>
    <div>
      <hr>
    </div>
    <div>
      <ul>
        总计： {{tmpTotalPrice}}
      </ul>
    </div>
    <div class="cart-footer">
      <div class="cart-footer-submit-product">
        <button @click="handleSubmitPay()"> 确认支付 </button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/common/Header'
import { accAdd, accMul } from '../utils/calculate'

export default {
  data () {
    return {}
  },
  components: {
    Header
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
    },
    selectedProducts () {
      const tmpProList = this.$store.getters.getSelectProducts
      return tmpProList.filter(item => item.selected_count > 0)
    }
  },
  methods: {
    handleSubmitPay () {
      alert('付款跳转')
    }
  }
}
</script>
