import request from './request.js'
const prefix = '/api'

function getHomeSwiper() {
  return request({
    url: prefix + '/home/swiper',
    method: 'get'
  })
}

function getHomeRecommend() {
  return request({
    url: prefix + '/home/recommend',
    method: 'get'
  })
}

function getHomePopular() {
  return request({
    url: prefix + '/home/popular',
    method: 'get'
  })
}

function getHomeGoods(type, page) {
  return request({
    url: '/api/home/goods',
    params: {
      type,
      page
    }
  })
}

export { getHomeSwiper, getHomeRecommend, getHomePopular, getHomeGoods }
