<template>
  <div>
    <swiper :options="swiperOption" class="detail-swiper" v-if="images.length">
      <swiper-slide class="item" v-for="(item, index) in images" :key="index">
        <img :src="item" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

export default {
  name: 'DetailSwiper',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    images: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        slidesPerView: 1.5,
        spaceBetween: 16,
        pagination: '.swiper-pagination',
        paginationClickable: true
      }
    }
  }
}
</script>

<style lang="scss">
.detail-swiper img {
  width: 100%;
  height: 340px;
  border-radius: 6px;
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
</style>
