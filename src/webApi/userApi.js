/**
 * Created by kanxuan on 2017/7/11.
 */

const util = require('../util/httpUtil.js')

function login (email, password) {
  return util.httpPost(util.baseURL + 'login', {email: email, password: password})
}

function authority (token) {
  return util.httpPost(util.baseURL + 'authority', {token: token})
}

function logout (user_id, token) {
  return util.httpDel(util.baseURL + 'login', {id: user_id, token: token})
}

function register (email, password, name = 'user') {
  return util.httpPost(util.baseURL + 'user', {email: email, password: password, name: name})
}

function getUserInformation (id) {
  return util.httpGet(util.baseURL + 'user/?id=' + id)
}

function getAvatar (id) {
  console.log('avatar', id)
  return util.httpGet(util.baseURL + 'user/avatar?id=' + id)
}

function changeUserInformation (info) {
  return util.httpPut(util.baseURL + 'user/', info)
}

//接口参数不全
function changeAvatar (avatar_url) {
  return util.httpPut(util.baseURL + 'user/avator', {avatar_url: avatar_url})
}

function changePassword (id, fromPassword, toPassword) {
  return util.httpPut(util.baseURL + 'user/pwd', {
    userId: id,
    passwordFrom: fromPassword,
    passwordTo: toPassword
  })
}

module.exports = {
  login,
  authority,
  logout,
  register,
  getUserInformation,
  changeUserInformation,
  changeAvatar,
  changePassword,
  getAvatar
}
