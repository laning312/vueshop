<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  // props: ['data'],
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    pullUp: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.pullUp
      })

      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', pos => {
          this.$emit('scroll', pos)
        })
      }

      if (this.pullUp) {
        this.scroll.on('pullingUp', () => {
          console.log('uuu')
          this.$emit('pullup') // 通知home组件
        })
      }
    }
  }
}
</script>
<style lang="scss"></style>
