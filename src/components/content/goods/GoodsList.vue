<template>
  <div class="goods-list">
    <goods-list-item
      v-for="(goods, inx) in data"
      :key="inx"
      :goods="goods"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from 'components/content/goods/GoodsListItem'
export default {
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>
<style lang="scss" scoped>
.goods-list {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
