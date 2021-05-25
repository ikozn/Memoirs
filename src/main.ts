import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './index.css'

const app = createApp(App)
app.directive('focus', {
  // 当被绑定的元素挂载到 DOM 中时……
  mounted (el) {
    // 聚焦元素
    el.focus()
  }
})

app.use(store).use(router).mount('#app')
