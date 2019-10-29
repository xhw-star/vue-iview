/**
 * 试验配置页面生命周期钩子
 * Created By Wangzhongyu 2019-08-10
 * 如需修改联系wangzhongyu@epmworld.net
 */

import DataMixins from './Data.mixins'
import NetWorkMixins from './network.mixins'
import Controller from './index.controller'
import IndexConfig from './index.config'

export default {
  mixins: [DataMixins, NetWorkMixins, Controller],
  components: {},
  computed: {},
  created () {}
}
