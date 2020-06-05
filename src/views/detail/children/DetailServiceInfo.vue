<template>
  <div class="shop-info">
    <div class="item" v-for="(item, inx) in service" :key="inx">
      <img :src="item.icon" alt="" />
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailServiceInfo',
  props: {
    service: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.shop-info {
  padding: 10px 8px;
  border-bottom: 5px solid #f2f5f8;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  .item {
    width: 33%;
    padding: 5px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  img {
    width: 16px;
    height: 16px;
    margin-right: 3px;
  }
}
</style>
