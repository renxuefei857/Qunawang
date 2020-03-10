import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'
import Home from '../pages/home/Home';
import City from '../pages/city/city';

import xqy from "../pages/detail/xqy";

// import FadeAn from "../common/fade/FadeAn"
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    // {
    //   path: '/FadeAn',
    //   name: 'FadeAn',
    //   component: FadeAn
    // },
    {
      path: '/xqy/:id',
      name: 'xqy',
      component: xqy
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

