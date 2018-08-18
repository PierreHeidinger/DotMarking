import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/_authentication/Login'
import Index from '@/components/_index/Index'


//Authentification
import { Authentication } from '../services/authentication'

Vue.use(Router)

const router = new Router({
  mode : 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: { 
        requiresAuth: true
      }
    },
    
  ]
});

router.beforeEach(async (to, from, next) => {

  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('token_auth') == null) {

          next({
              path: '/login',
              params: { nextUrl: to.fullPath }
          })

      } else {
  
        var isValid = await new Authentication().verifyStatusToken();

        if(isValid) 
        {
          next();
          
        }else{

          localStorage.setItem('token_auth',null);

          next({
            path: '/login',
            params: { nextUrl: to.fullPath }
          })
        }
      }
  }else {
      next() 
  };


});


export default router;