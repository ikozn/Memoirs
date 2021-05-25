<template>
  <teleport to="#modal">
    <div class="w-screen h-screen fixed top-0 left-0 z-10">
      <!-- background -->
      <div class="w-screen h-screen fixed top-0 left-0 bg-black opacity-25">
      </div>

      <!-- Modal -->
      <div class="flex items-center justify-center w-screen h-screen fixed top-0 left-0" @click="onClose" @keyup.enter="onConfirm">
        <div class="max-w-lg w-full bg-white shadow-lg z-50 rounded-sm overflow-hidden" @click.stop>
            <div class="flex items-center py-8 px-6 pb-4 space-x-4 md:flex-row flex-col md:text-left text-cente">
                <svg xmlns='http://www.w3.org/2000/svg' :class="{ [`text-${color}-500`]: true}" class='w-6 h-6 fill-current ' viewBox='0 0 512 512'><title>Alert Circle</title><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/><path d='M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/><path d='M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z'/></svg>
                <h1 :class="{ [`text-${color}-500`]: true}"  class="text-xl font-semibold tracking-wide leading-7">
                    {{title || "提示" }}
                </h1>
            </div>
            <div class="px-6">
              <slot>
                <p class="text-gray-500 text-sm">
                    {{ message }}
                </p>
              </slot>
            </div>
            <div class="p-3 text-right md:space-x-4 md:block flex flex-col-reverse">
                <button @click.prevent="onClose" class="px-4 md:py-1.5 py-2 bg-white border-2 rounded-sm focus:ring-offset-2 focus:outline-none ">
                    {{ cancelText}}
                </button>
                <button @click.prevent="onConfirm" :class="{ [`bg-${color}-500`]: true}" class="mb-2 md:mb-0 px-4 md:py-1.5 py-2 text-white rounded-sm focus:ring-offset-2 focus:outline-none">
                    {{ confirmText }}
                </button>
            </div>
        </div>
      </div>

    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import useDOMCreate from '@/hooks/useDOMCreate'
interface CallBack {
    onClose: () => void;
    onConfirm: () => void;
}

export type MessageType = 'success' | 'error' | 'default'

export default defineComponent({
  name: 'modal',
  props: {
    type: {
      type: String as PropType<MessageType>,
      default: 'default'
    },
    title: {
      type: String
    },
    message: {
      type: String
    },
    callback: {
      type: Object as PropType<CallBack>
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确认'
    }
  },
  emits: ['modal-on-close', 'modal-on-confirm'],
  setup (props, context) {
    useDOMCreate('modal')
    const onClose = () => {
      if (props.callback && props.callback.onClose) props.callback.onClose()
      context.emit('modal-on-close')
    }

    const onConfirm = () => {
      if (props.callback && props.callback.onConfirm) props.callback.onConfirm()
      context.emit('modal-on-confirm')
    }

    const colors = {
      default: 'blue',
      success: 'green',
      error: 'red'
    }
    const color = colors[props.type]

    return {
      color,
      onClose,
      onConfirm
    }
  }
})
</script>
