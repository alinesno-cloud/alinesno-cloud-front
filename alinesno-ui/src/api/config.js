import request from 'alinesno-ui/src/utils/request'

// 根据参数键名查询参数值
export function getConfigKey(configKey) {
  return request({
    url: '/common/config/type/' + dictType,
    method: 'get'
  })
}

// 获取企业信息ID和logo
export function getEnterpriseInfo() {
  return request({
    url: '/dashboard/getEnterpriseInfo' ,
    method: 'get'
  })
}


