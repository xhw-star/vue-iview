import Mock from 'mockjs'
import user from './src/user'
const mocks = [
  ...user
]
Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function () {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.proxy_send(...arguments)
}
for (const i of mocks) {
  Mock.mock(new RegExp(i.url), i.type || 'get', i.response)
}
export default Mock