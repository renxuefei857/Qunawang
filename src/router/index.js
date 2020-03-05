import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'
import Home from '../pages/home/Home';
import City from '../pages/city/city';

import xqy from "../pages/home/components/xqy"
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
    {
      path: '/xqy',
      name: 'xqy',
      component: xqy
    }
  ]
})

