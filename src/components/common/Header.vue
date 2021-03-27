<template>
  <div>
    <div class="common-header">
      <div class="common-header-my-info">
        <span>
          <b
            @mouseover="mouseover()"
          >我的<DownOutlined />
          </b>
        </span>
      </div>
      <div class="common-header-my-detail" v-if="hover" @mouseleave="mouseleave()">
        <ul>
          <li v-for="item in selectedProducts" :key="item.pro_id">
            <span> {{ item.pro_name }} </span>
            <span> {{ item.price }} * </span>
            <span> {{ item.selected_count }} </span>
          </li>
        </ul>
        <ul>
          <li>
            总计: {{tmpTotalPrice}}
          </li>
        </ul>
        <div>
          <button><router-link to="/settle">立即结算</router-link></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DownOutlined } from '@ant-design/icons-vue'
import { accAdd, accMul } from '../../utils/calculate'

export default {
  data () {
    return {
      hover: false
    }
  },
  components: {
    DownOutlined
  },
  computed: {
    selectedProducts () {
      return this.$store.getters.getSelectProducts
    },
    tmpTotalPrice () {
      let tmpPrice = 0.00
      if (this.$store.getters.getSelectProducts.length > 0) {
        this.$store.getters.getSelectProducts.forEach(element => {
          if (element.selected_count && element.price) {
            tmpPrice = accAdd(tmpPrice, accMul(element.selected_count, element.price))
          }
        })
      }

      return tmpPrice
    }
  },
  methods: {
    mouseover () {
      this.hover = true
    },
    mouseleave () {
      this.hover = false
    }
  }
}
</script>

<style>
.common-header {
  position: relative;
  width: 100%;
  height: 60px;
  background: gray;
}
.common-header-my-info {
  position: absolute;
  top: 30%;
  right: 4%;
  width:100px
}
.common-header-my-detail {
  position: absolute;
  top: 100%;
  right: 0%;
  width:200px;
  height: 200px;
  background: rgb(222, 229, 250);
  font-size: 14px;
}
.common-header-my-detail span {
  padding: 10px;
}
</style>
