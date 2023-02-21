import request from '@/utils/request'
export function getAllComp(pageNum, pageSize) {
    return request({
        url: `/complaint/data/${pageNum}/${pageSize}`,
        method: 'get'
    })
}