/**
 * 网路请求方法
 */
import userInfo from './index.config'
export default {
  methods: {
    loginUserInfo () {
      this.$axios.post('/login/login', userInfo).then(res => {
        console.log(res, 9999)
      }) 
    }
  }
}