<template>
  <div class="home-popular">
    <div class="title">本周流行</div>
    <div class="popular">
      <div class="item" v-for="(item, inx) in data" :key="inx">
        <img :src="item.image" alt="" />
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePopular',
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
.home-popular {
  height: 264px;
  border-bottom: 5px solid #eff4fa;
  .title {
    padding: 20px 0;
    text-align: center;
    font-size: 18px;
  }
  .popular {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .item {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 20px;
      img {
        width: 60%;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
