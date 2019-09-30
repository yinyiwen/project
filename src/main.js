// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/css/common.css"
import api from "./api"
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Tabs from "./components/tabs"
import BackTop from "./components/BackTop"
import "./assets/font/iconfont.css"

Vue.prototype.$api=api
Vue.use(VueAwesomeSwiper,)
Vue.use(Tabs)
Vue.use(BackTop)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
