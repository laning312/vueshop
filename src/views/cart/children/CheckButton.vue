<template>
  <div class="check-button" :class="{ active: value }" @click="selectItem">
    <div class="icon-selector">
      <div class="checkbox"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    value: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    selectItem() {
      this.$emit('checkBtnClick')
    }
  }
  // watch: {
  //   value(newValue) {
  //     this.checked = newValue
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.check-button {
  display: flex;
  align-items: center;
  &.active .checkbox {
    background-image: url(~assets/img/checkbox-on.png);
  }
  .checkbox {
    width: 30px;
    height: 30px;
    background-image: url(~assets/img/checkbox.png);
    background-size: 30px 30px;
  }
}
</style>
