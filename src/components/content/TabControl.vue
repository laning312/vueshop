<template>
  <div class="tab-control">
    <div
      class="item"
      v-for="(item, inx) in data"
      :key="inx"
      @click="clickTab(inx)"
    >
      <span :class="{ active: inx === currIndex }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currIndex: 0
    }
  },
  methods: {
    clickTab(i) {
      this.currIndex = i
      this.$emit('tabClick', i)
    }
  }
}
</script>
<style lang="scss" scoped>
.tab-control {
  display: flex;
  flex-direction: row;
  height: 46px;
  line-height: 46px;
  .item {
    flex: 1;
    width: 100%;
    text-align: center;
    span {
      font-size: 14px;
      padding-bottom: 8px;
      border-bottom: 2px solid #fff;
      &.active {
        color: #a0c9aa;
        border-bottom: 2px solid #a0c9aa;
      }
    }
  }
}
</style>
