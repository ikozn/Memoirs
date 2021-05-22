import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
// import Signup from './views/Signup.vue'
// import ColumnDetail from './views/ColumnDetail.vue'
// import CreatePost from './views/CreatePost.vue'

// import store from '@/store'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    //   meta: { redirectAlreadyLogin: true }
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   const { user, token } = store.state
//   const { requiredLogin, redirectAlreadyLogin } = to.meta
//   if (user.isLogin) {
//     if (redirectAlreadyLogin) {
//       next('/')
//     } else {
//       next()
//     }
//   } else {
//     if (token !== '') {
//       store.dispatch('fetchCurrentUser')
//         .then(() => {
//           // - 应该用commit提交吗？
//           // store.state.user.isLogin = true
//           // ..不用，fetchCurrentUser这个action请求完成后会调用同名mutation，该mutation会设置isLogin状态
//           if (redirectAlreadyLogin) {
//             next('/')
//           } else {
//             next()
//           }
//         })
//         .catch(e => {
//           store.commit('logout')
//           next('/')
//         })
//     } else {
//       if (requiredLogin) {
//         next('/login')
//       } else {
//         next()
//       }
//     }
//   }
// })

export default router
