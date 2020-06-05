<template>
  <div id="shop-item">
    <check-button
      v-model="itemInfo.checked"
      @checkBtnClick="checkBtnClick"
    ></check-button>
    <div class="item-img">
      <img :src="itemInfo.imgURL" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ itemInfo.title }}</div>
      <div class="item-desc">商品描述: {{ itemInfo.desc }}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{ itemInfo.newPrice }}</div>
        <div class="item-count right">x{{ itemInfo.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton'

export default {
  name: 'ShopCartItem',
  props: {
    itemInfo: Object
  },
  components: {
    CheckButton
  },
  methods: {
    checkBtnClick() {
      this.itemInfo.checked = !this.itemInfo.checked
    },
    toDetail(id) {
      this.$router.push({ path: '/detail', query: { id } })
    }
  }
}
</script>

<style scoped>
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 4px;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
  /*border: 1px solid #ccc;*/
}

.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 14px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 12px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.info-bottom .item-price {
  color: #a0c9aa;
}
.item-count {
  color: #999;
}
</style>
