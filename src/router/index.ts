import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Main from '@/views/Main.vue'
import login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Memo from '@/views/Memo.vue'
import Profile from '@/views/Profile.vue'
import Setting from '@/views/Setting.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: 'Main',
    component: Home
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '',
        name: 'Memo',
        component: Memo
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: 'setting',
        name: 'Setting',
        component: Setting
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
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

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
