import axios from './axios'
// 定义请求方法
export const getMenu = (param) => {
  return axios.request({
    url: '/permission/getMenu',
    method: 'post',
    data: param
  })
}

export const getData = () => {
  return axios.request({
    url: '/home/getData'
  })
}
