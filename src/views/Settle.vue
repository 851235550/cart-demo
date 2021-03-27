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
        <button> 确认支付 </button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/common/Header'

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
      this.$store.getters.getSelectProducts.forEach(element => {
        if (element.selected_count && element.price) {
          tmpPrice += element.selected_count * element.price
        }
      })
      return tmpPrice
    },
    selectedProducts () {
      return this.$store.getters.getSelectProducts
    }
  },
  methods: {

  }
}
</script>
