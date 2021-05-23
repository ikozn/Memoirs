import { createStore } from 'vuex'
// - 初始化LeanCloud
import AV from 'leancloud-storage'
const appId = process.env.VUE_APP_LEANCLOUD_ID
const appKey = process.env.VUE_APP_LEANCLOUD_KEY
const serverURL = process.env.VUE_APP_LEANCLOUD_URL
AV.init({ appId, appKey, serverURL })
const { User } = AV
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    async Login (state, { username, password }) {
      return User.logIn(username, password)
    }
  },
  modules: {
  }
})
