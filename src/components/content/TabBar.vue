<template>
  <div class="tab-bar">
    <router-link to="/home" class="item">
      <i class="iconfont icon-home"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/category" class="item">
      <i class="iconfont icon-category"></i>
      <span>分类</span>
    </router-link>
    <router-link to="/cart" class="item">
      <i class="iconfont icon-cart"></i>
      <span>购物车</span>
    </router-link>
    <router-link to="/me" class="item">
      <i class="iconfont icon-user"></i>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>
<style lang="scss">
/* css模块化的导入方式  @import '路径'
  在路径中用~表示开始使用别名方式，否则会认为是当前路径
*/
@import '~assets/css/iconfont.css';
.tab-bar {
  width: 100%;
  height: 50px;
  border-top: 1px solid #eee;
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  align-items: center;
  z-index: 99;
  background: #fff;
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50px;
    color: #888;
    span {
      margin-top: 2px;
      font-size: 12px;
    }
    &.router-link-active {
      color: #a0c9aa;
    }
  }
}
</style>
