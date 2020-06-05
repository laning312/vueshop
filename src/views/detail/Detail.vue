<template>
  <div class="detail">
    <img src="~@/assets/img/cart.png" class="img-cart" alt="" @click="toCart" />
    <detail-nav-bar
      :current-index="currentIndex"
      @itemClick="itemClick"
    ></detail-nav-bar>
    <!-- <detail-nav-bar @itemClick="titleClick" :current-index="currentIndex"></detail-nav-bar> -->
    <scroll class="wrapper" ref="scroll" :probeType="3" @scroll="contentScroll">
      <detail-swiper ref="base" :images="topImages"></detail-swiper>
      <detail-base-info :goods="base"></detail-base-info>
      <detail-service-info :service="service"></detail-service-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detail-info="detailInfo"
        @imgLoad="imgLoad"
      ></detail-goods-info>
      <detail-param-info
        ref="param"
        :param-info="paramInfo"
      ></detail-param-info>
      <detail-comment-info
        ref="comment"
        :comment-infos="commentInfo"
      ></detail-comment-info>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>

    <!-- toast -->
    <toast v-show="successShow" :info="'添加成功'"></toast>
  </div>
</template>

<script>
import DetailNavBar from './children/DetailNavBar'
import Scroll from 'components/common/Scroll'
import DetailSwiper from './children/DetailSwiper'
import DetailBaseInfo from './children/DetailBaseInfo'
import DetailServiceInfo from './children/DetailServiceInfo'
import DetailShopInfo from './children/DetailShopInfo'
import DetailGoodsInfo from './children/DetailGoodsInfo'
import DetailParamInfo from './children/DetailParamInfo'
import DetailCommentInfo from './children/DetailCommentInfo'
import DetailBottomBar from './children/DetailBottomBar'
import Toast from 'components/common/Toast'
import { getDetail } from 'network/detail'
export default {
  name: 'Detail',
  data() {
    return {
      topImages: [],
      base: {},
      service: [],
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: [],
      currentIndex: 0,
      // themeTopYs: [0, 1200, 2000]
      themeTopYs: [],
      successShow: false
    }
  },
  created() {
    const id = this.$route.query.id
    console.log(id)
    getDetail(id).then(res => {
      console.log(res)
      this.topImages = res.data.result.topImages
      this.base = res.data.result.itemInfo
      this.service = res.data.result.shopInfo.services
      this.shop = res.data.result.shopInfo
      this.detailInfo = res.data.result.detailInfo
      this.paramInfo = res.data.result.itemParams
      if (res.data.result.rateInfo.list) {
        this.commentInfo = res.data.result.rateInfo.list
      }
    })
  },
  // updated() {
  //   this.themeTopYs = []
  //   this.getThemeOffsetTop()
  // },
  methods: {
    itemClick(i) {
      this.currentIndex = i
      this.$refs.scroll.scroll.scrollTo(0, -this.themeTopYs[i], 500)
    },
    contentScroll(pos) {
      // 2.监听滚动到哪一个主题
      this._listenScrollTheme(-pos.y)
    },

    imgLoad() {
      this.themeTopYs = []
      this.getThemeOffsetTop()
    },
    getThemeOffsetTop() {
      this.themeTopYs.push(this.$refs.base.$el.offsetTop)
      this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      console.log(this.themeTopYs)
    },
    _listenScrollTheme(y) {
      for (let i = 0, length = this.themeTopYs.length; i < length; i++) {
        let w1 =
          i !== length - 1 &&
          y >= this.themeTopYs[i] &&
          y < this.themeTopYs[i + 1]
        let w2 = i === length - 1 && y >= this.themeTopYs[i]
        if (w1 || w2) {
          this.currentIndex = i
          break
        }
      }
    },
    // 添加到购物车
    addToCart() {
      // 1.创建对象
      const obj = {}
      // 2.对象信息
      obj.id = this.base.itemId
      obj.imgURL = this.topImages[0]
      obj.title = this.base.title
      obj.desc = this.base.desc
      obj.newPrice = this.base.lowNowPrice
      // 3.添加到Store中
      console.log(obj)
      this.$store.commit('addCart', obj)
      this.successShow = true
      setTimeout(() => {
        this.successShow = false
      }, 1000)
    },
    toCart() {
      this.$router.push('/cart')
    }
  },
  components: {
    DetailNavBar,
    Scroll,
    DetailSwiper,
    DetailBaseInfo,
    DetailServiceInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Toast
  }
}
</script>
<style lang="scss" scoped>
.detail {
  height: 100vh;
  position: relative;
  z-index: 100;
  background: #fff;
  .img-cart {
    position: absolute;
    right: 10px;
    top: 50px;
    width: 40px;
    height: 40px;
    z-index: 200;
  }
  .wrapper {
    position: relative;
    width: 100%;
    height: calc(100vh - 102px);
    overflow: hidden;
  }
}
</style>
