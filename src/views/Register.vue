<template>
<div class="bg-white rounded-md lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-sm">
            <div class="py-8 px-8 rounded-xl">

                <h1 class="font-medium text-2xl mt-3 text-center">Memoirs</h1>
                <p class="text-xs text-center font-light text-gray-400"> 让时间与日子留下痕迹</p>
                <validate-form class="mt-6" @form-submit="login">
                  <validate-input :rules="usernameRules" v-model="username" placeholder="用户名" ></validate-input>
                  <validate-input :rules="emailRules" v-model="emailVal" placeholder="邮箱" ></validate-input>
                  <validate-input :rules="passwdRules" v-model="passwdVal" placeholder="密码" type="password"></validate-input>
                  <validate-input :rules="passwdConfirmRules" v-model="passwdConfirmVal" placeholder="再次输入密码进行确认" type="password"></validate-input>
                  <template #submit-text>注册</template>
                </validate-form>
                <p class="mt-12 text-xs text-center font-light text-gray-400">
                    已有账号?
                    <router-link to="login" class="text-black font-medium">登录</router-link>
                </p>

            </div>
        </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateInput, { RulesType } from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'
import { useRouter } from 'vue-router'
import { User } from 'leancloud-storage'

export default defineComponent({
  name: 'login',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup () {
    const username = ref('')
    const usernameRules:RulesType = [
      {
        type: 'required',
        message: '请输入用户名'
      }
    ]

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

    const passwdVal = ref('')
    const passwdRules:RulesType = [
      {
        type: 'required',
        message: '请输入密码'
      }
    ]

    const passwdConfirmVal = ref('')
    const passwdConfirmRules:RulesType = [
      {
        type: 'custom',
        message: '两次密码不一致',
        validator: () => {
          return passwdConfirmVal.value === passwdVal.value
        }
      }
    ]

    const router = useRouter()
    const login = async (passed: boolean) => {
      if (passed) {
        const user = {
          username: username.value,
          password: passwdVal.value,
          email: emailVal.value
        }

        try {
          const user = new User()
          user.setUsername(username.value)
          user.setPassword(passwdVal.value)
          user.setEmail(emailVal.value)
          await user.signUp()
          router.push('login')
        } catch (e) {
          console.log('注册失败', e)
        }
      }
    }

    return {
      username,
      usernameRules,
      emailVal,
      emailRules,
      passwdVal,
      passwdRules,
      passwdConfirmVal,
      passwdConfirmRules,
      login
    }
  }
})
</script>
