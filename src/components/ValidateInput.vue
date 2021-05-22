<template>
  <div>
    <div class="my-5 text-sm">
      <input
        type="text"
        autofocus
        :class="{'border-2 border-red-500': inputRef.error, 'border-2 border-green-500': hasInput && !inputRef.error}"
        class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full "
        v-bind="$attrs"
        v-model="inputRef.val"
        @blur="validate"
      />
      <div class="flex items-center py-4" v-if="inputRef.error">
        <div class="bg-red-200 text-red-700 rounded-full p-1 fill-current">
            <svg
                class="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
            <path stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
        </div>
        <span class="font-medium text-sm ml-3 text-red-700">{{inputRef.message}}</span>
      </div>
      <!-- <div class="flex items-center py-4" v-else>
        <div
              class="bg-green-200 text-green-700 rounded-full p-1 fill-current ">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"
                      d="M5 13l4 4L19 7"/>

            </svg>
        </div>
        <span class="text-green-700 font-medium text-sm ml-3">格式正确</span>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, PropType } from 'vue'

// 定义规则属性
interface RuleProp {
    type: 'required' | 'email' | 'custom';
    message: string;
    validator ?: () => boolean;
}
export type RulesType = RuleProp[]

function validateEmail (email: string) {
  // 邮箱验证正则
  var reg = /^[A-Za-z0-9]+([_.][A-Za-z0-9]+)*@([A-Za-z0-9-]+\.)+[A-Za-z]{2,6}$/
  return reg.test(email)
}

export default defineComponent({
  props: {
    rules: Array as PropType<RulesType>,
    modelValue: String
  },
  inheritAttrs: false,
  setup (props, context) {
    const hasInput = ref(false)
    const inputRef = reactive({
      val: computed({
        get: () => props.modelValue || '',
        set: (val: string) => {
          context.emit('update:modelValue', val)
        }
      }),
      error: false,
      message: ''
    })

    const validate = () => {
      hasInput.value = true
      let passed = true
      if (props.rules) {
        // 检测是否符合每一条规则
        passed = props.rules.every((rule) => {
          let result = false
          const { type, message } = rule
          inputRef.message = message
          switch (type) {
            case 'email':
              result = validateEmail(inputRef.val)
              break
            case 'required':
              result = inputRef.val.trim() !== ''
              break
            case 'custom':
              result = (rule.validator && rule.validator()) as boolean
          }
          return result
        })
      }
      inputRef.error = !passed
      return passed
    }

    return {
      hasInput,
      inputRef,
      validate
    }
  }
})
</script>

<style>
</style>
