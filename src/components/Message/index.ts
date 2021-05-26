import { createApp, reactive } from 'vue'
import Message from '@/components/Message/Message.vue'
import MessageContianer from '@/components/Message/MessageContianer.vue'
import useDOMCreate from '@/hooks/useDOMCreate'
// 创建DOM容器
const messageContianerElement = useDOMCreate('message', 'w-full pointer-events-none fixed top-0')

interface MessageOptions {
  type?: string;
  message: string;
  onClose ?: () => void;
  duration: number;
  key ?: string | number;
  close ?: () => void;
}

type MessagesProps = {
  [key in number | string]: MessageOptions
}

// 初始化messages容器对象
const messages: MessagesProps = reactive({})

// 挂载容器实例到容器DOM容器上
const messageContianerInstance = createApp(MessageContianer, { messages })
messageContianerInstance.mount(messageContianerElement)

// 计数器，用于做key
let defaultKey = 0
const createMessage = (options: MessageOptions): void => {
  // 1. 提取参数
  const { onClose, duration, key = defaultKey++ } = options

  // 2. 设置关闭方法
  let countDown: number | null | undefined = null
  const close = () => {
    // 清除定时器：如果从其他地方调用，防止重复调用
    if (countDown) clearTimeout(countDown)
    // 调用回调
    onClose && onClose()
    delete messages[key]
  }

  // 3. 添加新的Message
  messages[key] = {
    key,
    ...options,
    close
  }

  // console.log(key, messages[key])

  // 4. 定时关闭
  countDown = setTimeout(close, duration * 1000)
}

// 快捷方式
const createTypeMessage = (type = 'info', message: string, duration = 2, onClose?: () => void) => {
  createMessage({
    type,
    message,
    onClose,
    duration
  })
}

const info = (message: string, duration = 2, onClose?: () => void) => {
  createTypeMessage.apply(this, ['info', message, duration, onClose])
}

const success = (message: string, duration = 2, onClose?: () => void) => {
  createTypeMessage.apply(this, ['success', message, duration, onClose])
}

const error = (message: string, duration = 2, onClose?: () => void) => {
  createTypeMessage.apply(this, ['error', message, duration, onClose])
}

const warning = (message: string, duration = 2, onClose?: () => void) => {
  createTypeMessage.apply(this, ['warning', message, duration, onClose])
}

export default {
  info,
  success,
  error,
  warning
}
