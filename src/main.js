// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import hd from './components/headerNav'
import banner from './components/banner' 
import ft from './components/footerNav' 
import newList from './components/newList' 

import 'swiper/dist/css/swiper.css'  //引入样式

Vue.config.productionTip = false

Vue.component('hdNav', hd)
Vue.component('banner', banner)
Vue.component('ftNav', ft)
Vue.component('newList', newList)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
