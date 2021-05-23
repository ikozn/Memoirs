<template>
  <div class="min-h-screen">
    <div class="text-base flex items-center px-4 h-16">
      <span class="nickname">
        <label class="font-bold mr-2 text-gray-700"> Hooyu </label>
        <label
          class="text-xs text-white rounded bg-gray-800 px-2 py-1 font-bold"
          >PRO</label
        >
      </span>
    </div>
    <div class="stat px-4">
      <div class="flex items-center justify-between text-gray-400">
        <div class="data">
          <div class="text-2xl font-bold">680</div>
          <div class="text-xs">MEMO</div>
        </div>
        <div class="data">
          <div class="text-2xl font-bold">168</div>
          <div class="text-xs">DAY</div>
        </div>
      </div>
    </div>
    <div class="flex w-full max-w-xs text-sm mt-2">
      <ul class="flex flex-col w-full">
        <sidebar-item text="MEMO" :to="{ name: 'Memo' }">
          <template #icon>
            <svg
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-5 w-5"
            >
              <path
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              ></path>
            </svg>
          </template>
        </sidebar-item>
        <sidebar-item text="账户" :to="{ name: 'Profile' }">
          <template #icon>
            <svg
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-5 w-5"
            >
              <path
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
          </template>
        </sidebar-item>
        <sidebar-item text="设置" :to="{ name: 'Setting' }">
          <template #icon>
            <svg
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-5 w-5"
            >
              <path
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              ></path>
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </template>
        </sidebar-item>

        <li
          class="my-px rounded-sm"
          :class="[
            isActive && 'router-link-activ',
            isExactActive && 'router-link-exact-active bg-blue-400 text-white',
          ]"
        >
          <a
            href=""
            class="flex flex-row items-center h-10 px-4 text-gray-600"
          >
            <span class="flex items-center justify-center text-sm text-red-400">
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                ></path>
              </svg>
            </span>
            <span class="ml-3 text"> 退出登录 </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SidebarItem from '@/components/SidebarItem.vue'
export default defineComponent({
  name: 'Sidebar',
  components: {
    SidebarItem
  }
})
</script>

<style scoped>
/* .header {
  height: 6.5rem;
}

.user {
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.nickname {
  font-size: 1.8rem;
  font-weight: bold;
  color: #5f5f5f;
}

.user .nickname .name {
  display: inline-block;
  cursor: pointer;
}

.user .nickname .pro {
  color: white;
  background: #9d9d9d;
  font-size: 1.2rem;
  padding: 0.2rem 0.4rem;
  border-radius: 0.4rem;
  display: inline-block;
  position: relative;
  bottom: 0.2rem;
  cursor: pointer;
}

.user .nickname .pro.active {
  background: #212f4b;
}

.datas {
  display: flex;
  justify-content: space-between;
  padding: 0 1.6rem;
  text-align: left;
  color: #9d9d9d;
}

.datas .number {
  font-size: 2.4rem;
  font-weight: bold;
}

.datas .type {
  font-size: 1.2rem;
}

.menu {
  font-size: 1.4rem;
  color: #9d9d9d;
  text-align: left;
  margin: 0.8rem 0;
}

.menu li {
  line-height: 3.6rem;
  padding-left: 2rem;
  cursor: pointer;
}

.menu .selected li {
  background: #55bb8e;
  color: #ffffff;
  border-radius: 5px;
} */
</style>
