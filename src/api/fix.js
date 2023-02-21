import request from '@/utils/request'
export function getAllFix(pageNum, pageSize) {
    return request({
        url: `/fix/getdata/${pageNum}/${pageSize}`,
        method: 'get'
    })
}