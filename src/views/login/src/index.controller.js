export default {
  methods: {
    /**
     * 登录按钮
     */
    handleSubmit (loginForm) {
      this.$refs[loginForm].validate(valid => {
        if (valid) {
          this.$store.dispatch('getUserInfo', this.loginForm).then(res => {
            console.log(res, 88888)
          })
        }
      })
      
    }
  }
}