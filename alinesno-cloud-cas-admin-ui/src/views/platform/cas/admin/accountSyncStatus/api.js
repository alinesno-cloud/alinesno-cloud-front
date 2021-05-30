import request from 'alinesno-ui/src/utils/request'

var prefix = 'demo/' ;
var url = {
    datatables : prefix +"datatables" ,
    createUrl: prefix + 'add' ,
    saveUrl: prefix + 'save' ,
    updateUrl: prefix +"modify" ,
    statusUrl: prefix +"changeStatus" ,
    cleanUrl: prefix + "clean",
    detailUrl: prefix +"detail",
    removeUrl: prefix + "delete" ,
    exportUrl: prefix + "exportExcel",
}

// 查询列表
export function listRole(query) {
  return request({
    url: url.datatables ,
    method: 'get',
    params: query
  })
}

// 查询详细
export function getRole(roleId) {
  return request({
    url: url.detailUrl,
    method: 'get'
  })
}

// 新增
export function addRole(data) {
  return request({
    url: url.saveUrl,
    method: 'post',
    data: data
  })
}

// 修改
export function updateRole(data) {
  return request({
    url: url.updateUrl,
    method: 'put',
    data: data
  })
}

// 状态修改
export function changeRoleStatus(roleId, status) {
  const data = {
    roleId,
    status
  }
  return request({
    url: url.statusUrl,
    method: 'put',
    data: data
  })
}

// 删除
export function delRole(roleId) {
  return request({
    url: url.removeUrl ,
    method: 'delete'
  })
}

// 导出
export function exportRole(query) {
  return request({
    url: url.exportUrl,
    method: 'get',
    params: query
  })
}
