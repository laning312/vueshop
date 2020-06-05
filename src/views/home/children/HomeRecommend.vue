<template>
  <div class="home-recommend">
    <div class="item" v-for="(item, inx) in data" :key="inx">
      <img :src="item.backgroundImage" alt="" />
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.home-recommend {
  height: 119px;
  padding: 10px 0 10px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom: 5px solid #eff4fa;
  .item {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 76%;
      border-radius: 3px;
      margin-bottom: 10px;
    }
  }
}
</style>
