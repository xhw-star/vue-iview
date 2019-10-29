export default {
  data () {
    return {
      carouselId: 0, // 幻灯片的索引
      autoplay: false, // 是否开启走动轮播
      loop: true, // 是否开启循环
      dots: 'none', // 指示器的位置，可选值为 inside （内部），outside（外部），none（不显示）
      radiusDot: false, // 是否显示圆形指示器
      arrow: 'never', // 切换箭头的显示时机，可选值为 hover（悬停），always（一直显示），never（不显示）
      loginForm: {
        userName: null, // 用户名
        password: null // 用户密码
      },
      // 登录表单验证
      loginRule: {
        // 用户名验证
        userName: [
          {required: true, message: this.$t('please fill in the user userName'), trigger: 'blur'}
        ],
        // 用户密码验证
        password: [
          {required: true, message: this.$t('please fill in the user password'), trigger: 'blur'}
        ]
      }
    }
  }
}