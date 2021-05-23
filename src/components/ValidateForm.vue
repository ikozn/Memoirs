<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button class="block text-center text-white bg-blue-600 p-3 duration-300 rounded-sm hover:bg-blue-900 w-full">
          <slot name="submit-text"> </slot>
        </button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt, { WildcardHandler } from 'mitt'
type Validator = () => boolean
// 实例化 mitt
export const emitter = mitt()

export default defineComponent({
  emits: ['form-submit'],
  setup (props, context) {
    let inputValidators: Validator[] = []

    // - 运行所有子组件的验证器，确保所有的结果都通过了
    const submitForm = () => {
      // 循环执行数组 得到最后的验证结果
      const result = inputValidators.map(func => func()).every(result => result)
      context.emit('form-submit', result)
    }

    // - 将输入框的验证函数保存起来
    const callback = (func: Validator) => {
      inputValidators.push(func)
    }
    // 添加监听
    emitter.on('form-item-created' as '*', callback as unknown as WildcardHandler)

    onUnmounted(() => {
      // 删除监听
      emitter.off('form-item-created' as '*', callback as unknown as WildcardHandler)
      inputValidators = []
    })
    return {
      submitForm
    }
  }
})
</script>
