<template>
  <!-- 首页轮播组件 -->
  <swiper :options="swiperOption" class="home-swiper">
    <swiper-slide v-for="(item, inx) in data" :key="inx" class="item">
      <img :src="item.image_800" alt="" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

export default {
  name: 'HomeSwiper',
  props: ['data'],
  data() {
    return {
      swiperOption: {
        autoplay: 4000,
        pagination: '.swiper-pagination',
        paginationClickable: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="scss">
.home-swiper {
  height: 132px;
  img {
    width: 100%;
    height: 130px;
  }
  .swiper-pagination {
    text-align: left;
  }
  .swiper-pagination-bullet {
    background: #fff;
    opacity: 0.4;
  }
  .swiper-pagination-bullet-active {
    background: #fff;
    opacity: 1;
  }
}
</style>
