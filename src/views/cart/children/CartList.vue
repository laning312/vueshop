<template>
  <scroll>
    <div>
      <cart-list-item
        v-for="item in cartList"
        :key="item.id"
        :item-info="item"
      ></cart-list-item>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'components/common/Scroll'
import CartListItem from './CartListItem'

export default {
  name: 'CartList',
  components: {
    Scroll,
    CartListItem
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped></style>
