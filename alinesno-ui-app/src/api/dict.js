import request from 'alinesno-ui/src/utils/request'

// 根据字典类型查询字典数据信息
export function getDicts(dictType) {
  return request({
    url: '/common/dict/type/' + dictType,
    method: 'get'
  })
}
