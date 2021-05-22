<template>
<div class="bg-white rounded-md lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-sm">
            <div class="py-8 px-8 rounded-xl">
                <h1 class="font-medium text-2xl mt-3 text-center">Memoirs</h1>
                <p class="text-xs text-center font-light text-gray-400"> 让时间与日子留下痕迹</p>
                <form action="" class="mt-6" @submit.prevent="login">
                  <validate-input :rules="emailRules" v-model="emailVal" placeholder="邮箱" ref="emailInputRef"></validate-input>
                    <button class="block text-center text-white bg-blue-600 p-3 duration-300 rounded-sm hover:bg-blue-900 w-full">登录</button>
                </form>

                <p class="mt-12 text-xs text-center font-light text-gray-400"> 还没有账号？ <a href="../auth/register.html" class="text-black font-medium"> 注册 </a>  </p>

            </div>
        </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateInput, { RulesType } from '@/components/ValidateInput.vue'

export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput
  },
  setup () {
    const emailInputRef = ref<any>()
    const emailVal = ref('')
    const emailRules:RulesType = [
      {
        type: 'required',
        message: '请输入邮箱'
      },
      {
        type: 'email',
        message: '邮箱格式不正确'
      }
    ]

    const login = () => {
      console.log(emailInputRef.value.validate())
      console.log('登录')
    }

    return {
      emailVal,
      emailRules,
      login,
      emailInputRef
    }
  }
})
</script>
