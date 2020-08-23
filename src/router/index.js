import Vue from 'vue'
import Router from 'vue-router'
import VueRouterTitle from 'vue-router-title'
import store from '../store/index.js';

import Config from './../script/config.js';

import Index from '@/components/HelloWorld'
import About from '@/components/About'

const pret = 'event',
      pretcol = pret + '::';

const router = new Router({

  routes: [
    {
      path: '/',
      name: 'index',
      meta: {title: pret, section: 'index', tag: ''},
      component: Index
    }, {
      path: '/about',
      name: 'about',
      meta: {title: pretcol + '關於', section: 'about', tag: ''},
      component: About
    }
  ],

  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(to.name == 'index' && to.hash != '') return;
        if((from.name == 'login' && to.name == 'sign-up') || (from.name == 'sign-up' && to.name == 'login')) return;
        resolve({ x: 0, y: 0 });
      }, 300);
    });
  }
})

Vue.use(Router);
Vue.use(VueRouterTitle, {router});


router.beforeEach((to, from, next) => {

  setTimeout(() => {

    var title = to.meta.tag,
        name = to.name,
        url = window.location.href;

    // if(Config.tracking) gtag('config', 'UA-122809543-1', {page_title: title, page_location: url, page_path: name });
    
    store.commit('page', to.meta.section); 
  }, 200);

  next();  
  
});

export default router;