import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hd from '../components/headerNav'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import canvas from '../components/canvas/01.vue'
import musicCanvas from '@/components/canvas/music'
import newslist from '../components/newList'
import SingleFilm from '@/components/douban/SingleFilm'
import HomeContent from '@/components/douban/HomeContent'
import douban from '@/components/douban/douban'

//Muse-UI
import MuseUI from 'muse-ui'
// import 'muse-ui/dist/muse-ui.css'
// import '@/assets/css/theme-dark.css'
Vue.use(MuseUI)

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: newslist
    },

    // canvas start
    {
      path: '/canvas',
      name: 'canvas',
      component: canvas,
      
    },
    {
      path: '/first',
      name: 'musicCanvas',
      component: musicCanvas
    },
    // canvas end

    {
      path:'/douban',
      name: 'douban',
      component: douban
    },
    {
      path:'/film/:id',
      name:'filmlink',
      component:SingleFilm
    }

  ]
})
