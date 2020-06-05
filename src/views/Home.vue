<template>
  <div class="home">
    <button @click="test">test</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  created() {},
  methods: {
    test() {
      console.log('test')
      axios
        .get('/api/home/swiper')
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  components: {}
}
</script>
