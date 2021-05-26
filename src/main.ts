import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './index.css'
import Message from '@/components/Message'

window.onerror = (e: any) => {
  Message.error(e as string)
  console.log(e)
}

window.addEventListener('unhandledrejection', function (event) {
  // 这个事件对象有两个特殊的属性：
  Message.error(event.reason)
  console.log(event.reason)
})

const app = createApp(App)
app.directive('focus', {
  // 当被绑定的元素挂载到 DOM 中时……
  mounted (el) {
    // 聚焦元素
    el.focus()
  }
})

app.use(store).use(router).mount('#app')
