import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}


export function getUser(usertype) {
  return request({
    url: `/user/byusertype/${usertype}`,
    method: 'get'
  })
}

export function deleuser(id) {
  return request({
    url: `/user/dele/${id}`,
    method: 'delete'
  })
}

// 新增普通业主
export function addcommonuser(Parm) {
  return request({
    url: '/user/add',
    method: 'post',
    data: {
      username: Parm.username,
      password: Parm.password,
      phone: Parm.phone,
      avatar: Parm.avatar,
      identitynumber: Parm.identitynumber

    }
  })
}