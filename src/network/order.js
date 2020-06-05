import request from './request.js'

function wxpay(data) {
  return request({
    url: '',
    method: 'post',
    data
  })
}

export { wxpay }
