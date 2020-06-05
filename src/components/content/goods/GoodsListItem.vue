<template>
  <div class="goods-list-item" @click="goDetail">
    <div class="pic">
      <img v-lazy="goods.img" alt="" />
      <span class="sale-num">已售{{ goods.sale }}件</span>
    </div>
    <div class="goods-info">
      <p>{{ goods.title }}</p>
      <span class="price">&yen;{{ goods.price }}</span>
      <span class="collect"
        ><i class="iconfont icon-shoucang"></i>{{ goods.cfav }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    // imageLoad(o) {
    //   o.load = true
    //   this.$bus.$emit('itemImageLoad')
    // }
    goDetail() {
      // 1.获取iid
      // console.log(this.goods)
      let id = this.goods.iid
      // // 2.跳转到详情页面
      this.$router.push({ path: '/detail', query: { id } })
    }
  }
}
</script>
<style lang="scss" scoped>
.goods-list-item {
  width: calc(48%);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
  .pic {
    position: relative;
    .sale-num {
      position: absolute;
      left: 0;
      bottom: 10px;
      padding: 4px 12px;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
  img {
    width: 100%;
    height: 270px;
    border-radius: 3px;
  }
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .goods-info {
    width: 96%;
  }
  .price {
    color: rgb(160, 201, 170);
    font-weight: bold;
    margin-right: 70px;
  }
}

/* img[lazy='loading'] {
  width: 20px !important;
  height: 20px !important;
}

img[lazy='loaded'] {
  background-color: #ffffff !important;
  width: 100%;
} */
</style>
