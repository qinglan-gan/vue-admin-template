import request from '@/utils/request'
// 获得所有通知
export function getallNotice() {
    return request({
        url: '/notice/getnotice',
        method: 'get'
    })
}
export function deleNotice(id) {
    return request({
        url: `/notice/dele/${id}`,
        method: 'delete'
    })
}
export function getType() {
    return request({
        url: "/noticetype/all",
        method: 'get'
    })
}
export function insertnotice(data) {

    return request({
        url: '/notice/add',
        method: 'post',
        data: {
            "noticetypeid": data.noticetypeid,
            "title": data.title,
            "content": data.content,
            "userid": data.userid
        }


    })
}

export function getusertype(usertype) {
    return request({
        url: `/user/byusertype/${usertype}`,
        method: 'get'
    })
}