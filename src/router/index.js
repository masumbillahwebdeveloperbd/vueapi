import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'frontend-master',
    component: ()=>import('../views/frontend/frontend-master.vue'),
    redirect:{path:'/home'},
    children:[
      {
        path: 'home',
        name: 'home',    
        component: () => import('../views/frontend/home/home.vue')
      },
      
      {
        path: 'logout',
        name: 'logout',    
        component: () => import('../views/frontend/Auth/logout.vue')
      }
    ]
  },
  {
    path: '/admin-login',
    name: 'admin-login',    
    component: () => import('../views/frontend/Auth/auth-master.vue'),
    redirect:{path:'/admin-login/login'},
    children:[
      
      {
        path: 'login',
        name: 'login',    
        component: () => import('../views/frontend/Auth/login.vue')
      },
      {
        path: 'register',
        name: 'register',    
        component: () => import('../views/frontend/Auth/register.vue')
      },
      
    ]

  },
  {
    path: '/dashboard',
    name: 'dashboard',    
    component: () => import('../views/admin/admin-master.vue'),
    redirect:{path:'dashboard/dashboard-home'},
    children:[
      {
        path: 'dashboard-home',
        name: 'dashboard-home',    
        component: () => import('../views/admin/home.vue')
      },
      {
        path: 'all-category',
        name: 'all-category',    
        component: () => import('../views/admin/category/allCategory.vue')
      },
      {
        path: 'add-category',
        name: 'add-category',    
        component: () => import('../views/admin/category/addCategory.vue')
      },
      {
        path: 'edit-category/:category_id',
        name: 'edit-category',    
        component: () => import('../views/admin/category/editCategory.vue')
      },
      {
        path: 'product',
        name: 'product',    
        component: () => import('../views/admin/product/allProduct.vue')
      },
      
      
    ]
    
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  
]


const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
