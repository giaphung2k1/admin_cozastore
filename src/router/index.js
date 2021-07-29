import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
import {ifNotAuthenticated,ifAuthenticated} from '../plugins/authenticate';

import Layout from '../layout';
import NotFound from '../components/NotFound'

const routes = [
  // Auth
  {
    path: '/login',
    name: 'login',
    beforeEnter: ifNotAuthenticated,
    component: () => import('@/views/auth/login')
    
    

  },
  {
    path: '/register',
    name: 'register',
    beforeEnter: ifNotAuthenticated,
    component: () => import('@/views/auth/register')
  },
  {
    path: '/logout',
    name: 'logout',

    beforeEnter: ifAuthenticated,
  },

  // Dashboard
  {
    path:'/admin/dashboard',
    component:Layout,
    children: [
      {
        path:'',
        name:'dashboard',
        beforeEnter: ifAuthenticated,
        component:() => import('../views/dashboard')
        
      },
    ]
    
  },

  // Product
  {
    path:'/admin/product',
    component:Layout,
    children: [
      {
        path:'',
        name:'product',
        component:() => import('../views/product')
        
      },
    ]
    
  },
  {
    path:'/admin/product/add-product',
    component:Layout,
    children: [
      {
        path:'',
        name:'add-product',
        component:() => import('../views/product/add')
        
      },
    ]
    
  },
  {
    path:'/admin/product/edit-product',
    component:Layout,
    children: [
      {
        path:'',
        name:'edit-product',
        component:() => import('../views/product/edit')
        
      },
    ]
    
  },

  // Categories Product
  {
    path:'/admin/cat-product',
    component:Layout,
    children: [
      {
        path:'',
        
        name:'cat-product',
        component:() => import('../views/categoryProduct')
        
      },
    ]
    
  },
  {
    path:'/admin/cat-product/add',
    component:Layout,
    children: [
      {
        path:'',
        name:'add-cat-product',
        component:() => import('../views/categoryProduct/add')
        
      },
    ]
    
  },
  {
    path:'/admin/cat-product/edit/:id',
    component:Layout,
    children: [
      {
        path:'',
        name:'edit-cat-product',
        component:() => import('../views/categoryProduct/edit')
        
      },
    ]
    
  },

  // Cart
  {
    path:'/admin/cart',
    component:Layout,
    children: [
      {
        path:'',
        name:'cart',
        component:() => import('../views/cart')
        
      },
    ]
    
  },

  // Permission
  {
    path:'/admin/permission',
    component:Layout,
    children:[
      {
        path:'',
        name:'permission',
        component:() => import('../views/permission')
      },
      {
        path:'add-permission',
        name:'add-permission',
        component:() => import('../views/permission/add')
      },
      {
        path:'edit-permission',
        name:'edit-permission',
        component:() => import('../views/permission/edit')
      },
    ]
  },

  // User
  {
    path:'/admin/user',
    component:Layout,
    children: [
      {
        path:'',
        name:'user',
        component:() => import('../views/user')
        
      },
      {
        path:'add-user',
        name:'add-user',
        component:() => import('../views/user/add')
        
      },
      {
        path:'profile',
        name:'profile',
        component:() => import('../views/user/profile')
        
      },
    ]
    
  },

  // Setting
  {
    path:'/admin/setting',
    component:Layout,
    children: [
      {
        path:'',
        name:'setting',
        component:() => import('../views/setting')
        
      },
    ]
    
  },
  {
    path:'/404',
    name:'404',
    component:NotFound,

  },
  {
    path:'*',
    redirect:'/login',
    beforeEnter: ifNotAuthenticated,


  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
