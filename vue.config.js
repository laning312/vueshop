module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        views: '@/views',
        network: '@/network'
      }
    }
  },
  devServer: {
    // /api/home/swiper相当于http://localhost:20000/mock/5ecb6b8eb48e2430fc65550d/home/swiper
    // /api相当于http://localhost:20000/mock/5ecb6b8eb48e2430fc65550d
    proxy: {
      '/api': {
        target: 'http://localhost:20000/mock/5ecb6b8eb48e2430fc65550d', // 要代理的域名
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/api': '' // 路径重写
        }
      }
    }
  }
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require('postcss-px2rem')({ remUnit: 30 }) // 换算的基数
  //       ]
  //     }
  //   }
  // }
}
