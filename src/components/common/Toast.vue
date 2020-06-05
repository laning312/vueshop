<template>
  <div class="toast">
    <div>{{ info }}</div>
    <img src="~assets/img/success.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: ['info']
}
</script>
<style lang="scss">
.toast {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 120px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  z-index: 111;
  font-size: 14px;
}

.toast img {
  width: 50px;
  height: 50px;
}
</style>
