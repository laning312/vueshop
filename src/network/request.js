import axios from 'axios'
// axios的全局配置
// axios.defaults.baseURL = ''
// axios.defaults.timeout = 5000
// axios.defaults.headers = {}

// axios拦截器
// 拦截请求
// axios.interceptors.request.use(config => {
//   return config;
// })
// 拦截响应
axios.interceptors.response.use(res => {
  return res.data
})

function request(config) {
  return axios(config)
}

export default request
