<template>
  <nav-bar class="detail-nav">
    <img
      slot="left"
      class="back"
      @click="backClick"
      src="~assets/img/back.png"
    />
    <div class="title" slot="center">
      <span
        class="title-item"
        v-for="(item, index) in titleInfos"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="itemClick(index)"
      >
        {{ item }}
      </span>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/NavBar'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  props: {
    currentIndex: {
      type: Number,
      default: 0
    },
    titleInfos: {
      type: Array,
      default: () => {
        return ['商品', '参数', '评论']
      }
    }
  },
  methods: {
    itemClick(index) {
      this.$emit('itemClick', index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-nav {
  background-color: #fff;
  font-weight: normal;

  .title {
    display: flex;
    padding: 0 20px;
    font-size: 14px;
  }

  .title-item {
    flex: 1;
    &.active {
      color: #a0c9aa;
    }
  }

  .back {
    margin-top: 20px;
    width: 24px;
    height: 24px;
  }
}
</style>
