import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AV from 'leancloud-storage'
import Home from '@/views/Home.vue'
import Mine from '@/views/Mine.vue'
import login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Memo from '@/views/Memo.vue'
import Profile from '@/views/Profile.vue'
import Setting from '@/views/Setting.vue'

const { User } = AV
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: { name: 'Mine' },
    component: Home
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine,
    children: [
      {
        path: '',
        name: 'Memo',
        component: Memo,
        meta: {
          needLogin: true
        }
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile,
        meta: {
          needLogin: true
        }
      },
      {
        path: 'setting',
        name: 'Setting',
        component: Setting,
        meta: {
          needLogin: true
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      redirectAlreadyLogin: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      redirectAlreadyLogin: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: 'about' */ '../views/About.vue'),
    meta: {
      redirectAlreadyLogin: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: 'mine'
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const { redirectAlreadyLogin, needLogin } = to.meta
  const user = User.current()
  if (redirectAlreadyLogin && user) {
    return next('/')
  }

  if (needLogin && !user) {
    return next('/login')
  }

  next()
})

export default router
