import request from 'alinesno-ui/src/utils/request'

// 根据参数键名查询参数值
export function getConfigKey(configKey) {
  return request({
    url: '/common/config/type/' + dictType,
    method: 'get'
  })
}


