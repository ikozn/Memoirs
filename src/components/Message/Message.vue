<template>
    <!-- Message -->
      <div
        class="mx-auto flex items-center max-w-lg w-full mt-3 bg-white shadow-sm z-50 rounded-sm pointer-events-auto overflow-hidden"
      >
        <!-- 图标 -->
        <div
          @click="show = !show"
          :class="{ [`bg-${color}-100 text-${color}-700`]: true }"
          class="message-icon self-stretch flex items-center justify-center  p-1.5 "
          v-html="icon"
        ></div>
        <!-- 信息 -->
        <p class="content flex-grow ml-2 text-gray-500">
          {{ message }}
        </p>
        <!-- 关闭按钮 -->
        <div class="closeBtn p-3 cursor-pointer" @click="onClose">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 512 512"
          >
            <title>Close</title>
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M368 368L144 144M368 144L144 368"
            />
          </svg>
        </div>
      </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export type MessageType = 'loading' | 'success' | 'error' | 'info' | 'warning';

export default defineComponent({
  name: 'modal',
  props: {
    type: {
      type: String as PropType<MessageType>,
      default: 'success'
    },
    message: {
      type: String
    },
    key: {
      type: String
    },
    duration: {
      type: Number,
      default: 2
    }
  },
  emits: ['message-on-close'],
  setup (props, context) {
    const onClose = () => {
      context.emit('message-on-close')
    }

    const icons = {
      loading: 'blue',
      success:
        "<svg xmlns='http://www.w3.org/2000/svg' class='w-6 h-6' viewBox='0 0 512 512'><title>Checkmark Circle</title><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M352 176L217.6 336 160 272'/></svg>",
      error:
        "<svg xmlns='http://www.w3.org/2000/svg' class='w-6 h-6' viewBox='0 0 512 512'><title>Close Circle</title><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M320 320L192 192M192 320l128-128'/></svg>",
      info:
        "<svg xmlns='http://www.w3.org/2000/svg' class='w-6 h-6' viewBox='0 0 512 512'><title>Information Circle</title><path d='M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M220 220h32v116'/><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-miterlimit='10' stroke-width='32' d='M208 340h88'/><path d='M248 130a26 26 0 1026 26 26 26 0 00-26-26z'/></svg>",
      warning:
        "<svg xmlns='http://www.w3.org/2000/svg' class='w-6 h-6' viewBox='0 0 512 512'><title>Warning</title><path d='M85.57 446.25h340.86a32 32 0 0028.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0028.17 47.17z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/><path d='M250.26 195.39l5.74 122 5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 5.95z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/><path d='M256 397.25a20 20 0 1120-20 20 20 0 01-20 20z'/></svg>"
    }

    const icon = icons[props.type]

    const colors = {
      loading: 'blue',
      success: 'green',
      error: 'red',
      info: 'blue',
      warning: 'yellow'
    }

    const color = colors[props.type]

    return {
      icon,
      color,
      onClose
    }
  }
})
</script>

<style>
.message-icon svg {
  fill: currentColor;
}

/* 可以设置不同的进入和离开动画   */
/* 设置持续时间和动画函数        */
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  0% {
    opacity: 0
  }

  100% {
    opacity: 1
  }
}

.message-fade {
  transition: opacity .3s, transform .4s;
}

  .message-fade-enter,
  .message-fade-leave-to{
    opacity: 0;
    transform: translateX(-50%) translateY(-30px);
  }

  .message-fade-enter-to,
  .message-fade-leave{
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
</style>
