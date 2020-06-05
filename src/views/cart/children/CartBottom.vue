<template>
  <div class="bottom-menu">
    <check-button
      v-model="isSelectAll"
      @checkBtnClick="checkBtnClick"
    ></check-button>
    <span>全选</span>
    <div class="item-right">
      <span>合计:</span>
      <span class="total-price"> ¥{{ totalPrice }}</span>
      <span class="buy-product" @click="calc">去结算</span>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton'

export default {
  name: 'BottomBar',
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      const cartList = this.$store.state.cartList
      return cartList
        .filter(item => {
          return item.checked
        })
        .reduce((preValue, item) => {
          return preValue + item.count * item.newPrice
        }, 0)
        .toFixed(2)
    },
    isSelectAll() {
      return (
        this.$store.state.cartList.find(item => item.checked === false) ===
        undefined
      )
    }
  },
  methods: {
    checkBtnClick() {
      // 1.判断是否有未选中的按钮
      let isSelectAll = this.$store.state.cartList.find(item => !item.checked)

      // 2.有未选中的内容, 则全部选中
      if (isSelectAll) {
        this.$store.state.cartList.forEach(item => {
          item.checked = true
        })
      } else {
        this.$store.state.cartList.forEach(item => {
          item.checked = false
        })
      }
    },
    calc() {
      this.$emit('calc')
    }
  }
}
</script>

<style scoped>
.bottom-menu {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 50px;
  left: 0;
  font-size: 14px;
  color: #888;
  line-height: 50px;
  padding-left: 10px;
  border-top: 1px solid #eee;
  box-sizing: border-box;
}

.bottom-menu .item-right {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding-right: 10px;
}

.bottom-menu .total-price {
  margin-left: 15px;
  font-size: 16px;
  color: #a0c9aa;
  padding: 0 15px 0 5px;
}

.bottom-menu .buy-product {
  background-color: #a0c9aa;
  color: #fff;
  width: 100px;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
</style>
