import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hd from '../components/headerNav'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import canvas from '../components/canvas/01.vue'
import newslist from '../components/newList'
import SingleFilm from '@/components/douban/SingleFilm'
import HomeContent from '@/components/douban/HomeContent'
import douban from '@/components/douban/douban'
Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: newslist
    },
    {
      path: '/canvas',
      name: 'canvas',
      component: canvas
    },
 
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
