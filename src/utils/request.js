import axios from 'axios'
import { message } from 'ant-design-vue'

// 创建axios对象
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 基础路径，默认是/ ，如果改了，会自动添加到你请求url前面
  timeout: process.env.VUE_APP_TIMEOUT // 请求超时，10000毫秒
})
// 请求拦截器
request.interceptors.request.use(config => {
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

  return config
}, function (error) {
  // 处理请求错误
  return Promise.reject(error)
})

// 请求拦截器
request.interceptors.request.use(config => {
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  config.headers.Authorization = process.env.VUE_APP_AUTHORIZATION

  return config
}, function (error) {
  // 处理请求错误
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(
  (response) => {
  // 在2xx范围内的任何状态代码都会触发此功能
  // 处理响应数据
    return Promise.resolve(response.data)
  },
  (error) => {
    // 任何超出2xx范围的状态代码都会触发此功能
    // 处理响应错误
    // console.log(error.response)
    const code = error.response.status
    switch (code) {
      case 400:
        message.error(`${code} 错误请求`)
        break
      case 401:
        message.error(`${code} 未授权，请重新登录`)
        break
      case 404:
        message.error(`${code} 请求地址不存在`)
        break
      case 428:
        message.error(`${code} 请求参数错误`)
        break
      case 500:
        message.error(`${code} 服务器端错误`)
        break
      case 503:
        message.error(`${code} 服务不可用`)
        break
      default:
        message.error(`${code} ${error.response.statusText}`)
        break
    }
    if (JSON.stringify(error.message).includes('timeout')) {
      message.error('服务请求超时，请稍后再试')
    }
    return Promise.reject(error)
  })

export default request
