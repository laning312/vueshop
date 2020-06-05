import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  cartList: []
}
const mutations = {
  addCart(state, e) {
    //1. 检查是否添加过
    const t = state.cartList.find(item => item.id === e.id)
    if (t) {
      // 存在
      t.count += 1
    } else {
      // 不存在
      e.count = 1
      e.checked = false
      state.cartList.push(e)
    }
  }
}
const store = new Vuex.Store({
  state,
  mutations
})
export default store
