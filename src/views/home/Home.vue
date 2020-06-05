<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center">时尚街</div>
    </nav-bar>
    <tab-control
      class="tab-control2"
      ref="tabControl2"
      :data="tabControlData"
      @tabClick="tabClick"
      v-show="isTabFixed"
    ></tab-control>
    <!-- scroll -->
    <scroll
      class="wrapper"
      ref="scroll"
      :probeType="3"
      :pullUp="true"
      @pullup="loadMore"
      @scroll="scrollPos"
    >
      <!-- 首页轮播 -->
      <home-swiper :data="swiperData"></home-swiper>
      <!-- 首页推荐 -->
      <home-recommend :data="recommendData"></home-recommend>
      <!-- 每周推荐 -->
      <home-popular :data="popularData"></home-popular>
      <!-- 中间选项卡 -->
      <tab-control
        ref="tabControl"
        class="tab-control"
        :data="tabControlData"
        @tabClick="tabClick"
        v-show="!isTabFixed"
      ></tab-control>
      <!--  -->
      <goods-list
        ref="goodsList"
        :data="goods[currentGoodsType].list"
      ></goods-list>
      <div class="hasMore" :class="{ show: isNoMore }">~~没有了~~</div>
    </scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar'
import HomeSwiper from './children/HomeSwiper'
import HomeRecommend from './children/HomeRecommend'
import HomePopular from './children/HomePopular'
import TabControl from 'components/content/TabControl'
import Scroll from 'components/common/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import {
  getHomeSwiper,
  getHomeRecommend,
  getHomePopular,
  getHomeGoods
} from '@/network/home.js'

export default {
  name: 'Home',
  data() {
    return {
      swiperData: [],
      recommendData: [],
      popularData: [],
      tabControlData: ['流行', '新款', '经典'],
      titlesEn: ['pop', 'new', 'classic'],
      goods: {
        pop: { page: 0, list: [], totalPages: 0 },
        new: { page: 0, list: [], totalPages: 0 },
        classic: { page: 0, list: [], totalPages: 0 }
      },
      currentGoodsType: 'pop',
      isTabFixed: false,
      tabOffsetTop: 0,
      isNoMore: false
    }
  },
  created() {
    this.getSwiper()
    this.getRecommend()
    this.getPopular()
    this.getGoods('pop')
    this.getGoods('new')
    this.getGoods('classic')
  },
  mounted() {
    this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
  },
  methods: {
    getSwiper() {
      getHomeSwiper().then(res => {
        if (res.success) {
          this.swiperData = res.data[140378].list
        }
      })
    },
    getRecommend() {
      getHomeRecommend().then(res => {
        // 把数据赋值给data属性
        if (res.ret === 'SUCCESS') {
          this.recommendData = res.data[122995].list
        }
      })
    },
    getPopular() {
      getHomePopular().then(res => {
        if (res.ret === 'SUCCESS') {
          this.popularData = res.data[132826].list.slice(0, 8)
        }
      })
    },
    getGoods(type) {
      let page = ++this.goods[type].page
      getHomeGoods(type, page).then(res => {
        if (res.ret === 'SUCCESS') {
          // this.goods[type].list = res.data.wall.docs
          this.goods[type].list.push(...res.data.wall.docs)
          this.goods[type].totalPages = res.data.param.totalPages
          this.goods[type].page = page

          // 结束本次下拉
          this.$refs.scroll.scroll.finishPullUp()
        }
      })
    },
    tabClick(i) {
      this.$refs.tabControl.currIndex = i
      this.$refs.tabControl2.currIndex = i
      this.currentGoodsType = this.titlesEn[i]
      this.$refs.scroll.scroll.scrollTo(0, -this.tabOffsetTop)
      this.isNoMore = false
    },
    scrollPos(pos) {
      // console.log(pos);
      // console.log(pos.y)
      this.isTabFixed = -pos.y >= this.tabOffsetTop
    },
    loadMore() {
      if (
        this.goods[this.currentGoodsType].page <
        this.goods[this.currentGoodsType].totalPages // 如果没有到最后一页，那就loadmore
      ) {
        this.getGoods(this.currentGoodsType)
      } else {
        this.isNoMore = true
      }
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomePopular,
    TabControl,
    Scroll,
    GoodsList
  },
  watch: {
    isTabFixed(newValue) {
      if (newValue) {
        this.$refs.scroll.$el.style.height =
          this.$refs.scroll.$el.offsetHeight - 46 + 'px'
      } else {
        this.$refs.scroll.$el.style.height =
          this.$refs.scroll.$el.offsetHeight + 46 + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding-top: 44px;
  margin-bottom: 51px;
  .home-nav {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: #a0c9aa;
    color: #fff;
    z-index: 99;
  }
  .wrapper {
    position: relative;
    height: calc(100vh - 95px);
    // height: 500px;
    overflow: hidden;
    // background: blue;
  }
  .tab-control {
    // position: sticky; // 粘性定位
    top: 44px;
    // background: #fff;
    // background: yellowgreen;
    z-index: 99;
  }
  .tab-control2 {
    // background: green;
  }
  .hasMore {
    padding: 20px 0;
    text-align: center;
    opacity: 0;
    &.show {
      opacity: 1;
    }
  }
}
</style>
