import request from 'alinesno-ui/src/utils/request'

// 获取路由
export const getRouters = () => {
  return request({
    url: '/dashboard/getRouters',
    method: 'get'
  })
}
