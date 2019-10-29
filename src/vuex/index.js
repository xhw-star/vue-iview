import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import actions from './src/actions'
import mutations from './src/mutation'
import getter from './src/getter'
import state from './src/state'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production' // 判断当前环境是生产环境还是发布环境
const store = new Vuex.Store({
  modules: {},
  mutations,
  actions,
  state,
  getter,
  strict: debug, // 是否开启严格模式  发布环境关闭(推荐) 生产环境开启(推荐)
  plugins: debug ? [createLogger()] : []
})
export default store