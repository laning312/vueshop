import request from './request.js'
const prefix = '/api'

function getDetail(id) {
  return request({
    url: prefix + 'goods/detail',
    params: {
      id
    }
  })
}

export { getDetail }
