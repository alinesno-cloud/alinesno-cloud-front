import request from 'alinesno-ui/src/utils/request'

export function importTemplate(downloadUrl) {
    return request({
        url: downloadUrl,
        method: 'get'
    })
}