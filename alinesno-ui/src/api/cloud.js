import request from 'alinesno-ui/src/utils/request'

// 获取产品列表
export function cloudProductList() {
  return request({
    url: '/cloud/productItem',
    method: 'get'
  })
}

