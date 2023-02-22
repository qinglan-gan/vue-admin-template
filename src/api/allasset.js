import request from '@/utils/request'
export function gettypeList() {
    return request({
        url: `/asserttype/all`,
        method: 'get'
    })
}

// 添加修改资源信息
export function save(obj) {
    return request({
        url: '/asserts/save',
        method: 'post',
        data: obj,
    })
}