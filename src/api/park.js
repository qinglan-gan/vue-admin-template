// 停车位对应接口
import request from '@/utils/request'

export function getParkAll() {
    return request({
        url: '/notice/getnotice',
        method: 'get'
    })
}