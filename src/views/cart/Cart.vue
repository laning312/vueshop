<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <img
        slot="left"
        class="back"
        @click="backClick"
        src="~assets/img/back-w.png"
      />
      <div slot="center">购物车（{{ cartCount }}）</div></nav-bar
    >
    <!-- 列表 -->
    <cart-list :cart-list="cartList"></cart-list>
    <cart-bottom @calc="calc"></cart-bottom>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar'
import CartList from './children/CartList'
import CartBottom from './children/CartBottom'
import { wxpay } from '@/network/order'
export default {
  name: 'Cart',
  created() {},
  computed: {
    cartCount() {
      return this.$store.state.cartList.length
    },
    cartList() {
      return this.$store.state.cartList
    }
  },
  methods: {
    backClick() {
      console.log(window)
      this.$router.back()
    },
    calc() {
      wxpay({}).then(res => {
        console.log(res)
      })
    }
  },
  components: {
    NavBar,
    CartList,
    CartBottom
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  background: #a0c9aa;
  color: #fff;
  font-size: 14px;
  .back {
    margin-top: 20px;
    width: 20px;
    height: 20px;
  }
}
</style>
