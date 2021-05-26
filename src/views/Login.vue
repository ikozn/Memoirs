<template>
  <div
    class="bg-white rounded-md lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-sm"
  >
    <div class="py-8 px-8 rounded-xl">
      <h1 class="font-medium text-2xl mt-3 text-center">Memoirs</h1>
      <p class="text-xs text-center font-light text-gray-400">
        让时间与日子留下痕迹
      </p>
      <validate-form class="mt-6" @form-submit="login">
        <validate-input
          :rules="emailRules"
          v-model="emailVal"
          placeholder="邮箱"
        ></validate-input>
        <validate-input
          :rules="passwdRules"
          v-model="passwdVal"
          placeholder="密码"
          type="password"
        ></validate-input>
        <template #submit-text>登录</template>
      </validate-form>
      <p class="mt-12 text-xs text-center font-light text-gray-400">
        还没有账号？
        <router-link to="register" class="text-black font-medium"
          >注册</router-link
        >
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateInput, { RulesType } from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'login',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup () {
    const emailVal = ref('')
    const emailRules: RulesType = [
      {
        type: 'required',
        message: '请输入邮箱'
      },
      {
        type: 'email',
        message: '邮箱格式不正确'
      }
    ]

    const passwdVal = ref('')
    const passwdRules: RulesType = [
      {
        type: 'required',
        message: '请输入密码'
      }
    ]

    const store = useStore()
    const router = useRouter()
    const login = (passed: boolean) => {
      if (passed) {
        store
          .dispatch('login', {
            username: emailVal.value,
            password: passwdVal.value
          })
          .then(() => {
            console.log('登录成功')
            router.push('main')
          })
          .catch(({ error }) => {
            console.log('登录失败', error)
          })
      }
    }

    return {
      emailVal,
      emailRules,
      passwdVal,
      passwdRules,
      login
    }
  }
})
</script>
