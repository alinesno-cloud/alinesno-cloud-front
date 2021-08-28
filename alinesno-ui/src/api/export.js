import request from 'alinesno-ui/src/utils/request'
// 导出
export function exportData(exportUrl, query) {
    return request({
        url: exportUrl,
        method: 'get',
        params: query
    })
}