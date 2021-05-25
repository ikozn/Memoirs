import { createApp } from 'vue'
import Modal from '@/components/Modal.vue'
export type MessageType = 'success' | 'error' | 'default'

interface ModalOptions {
  type?: string;
  title?: string;
  message: string;
  onClose ?: () => void;
  onConfirm ?: () => void;
  cancelText ?: string;
  confirmText ?: string;
}

export default (options: ModalOptions): void => {
  // 1. 传入创建实例，Massage是之前创建的单文件模板，配置信息都在里面
  // -  第二个参数是props
  // 初始化callback
  const { onClose, onConfirm } = options
  const callback = {
    onClose,
    onConfirm
  }

  const messageInstance = createApp(Modal, {
    ...options,
    callback
  })

  // 2. 创建HTML元素节点,并将实例挂载上去
  const mountNode = document.createElement('div')
  document.body.appendChild(mountNode)
  messageInstance.mount(mountNode)

  // 3. 取消/确认时取消挂载，删除元素

  callback.onClose = () => {
    onClose && onClose()
    messageInstance.unmount()
    document.body.removeChild(mountNode)
  }

  callback.onConfirm = () => {
    onConfirm && onConfirm()
    messageInstance.unmount()
    document.body.removeChild(mountNode)
  }
}
