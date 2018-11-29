import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/Login'
import SWPI from '@/components/SWPI'
import register from '@/components/Register'
import modification from '@/components/Modification'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'SWPI',
      component: SWPI
    },
		{
			path: '/register',
			name: 'register',
			component: register
		},
		{
			path: '/login',
			name: 'login',
			component: login
		},
		{
			path: '/modification',
			name: 'modification',
			component: modification
		}
  ]
})
