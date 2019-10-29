import {login} from '../../api/user'
const actions = {
  /**
   * 获取用户登录信息
   */
  async getUserInfo ({commit}, userInfo) {
    const { userName, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: userName, password: password }).then(res => {
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}
export default actions