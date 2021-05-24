<template>
  <div class="min-h-screen">
    <div class="text-base flex items-center px-4 h-16">
      <router-link :to="{ name: 'Memo'}" v-slot="{ href }">
        <label class="text-lg font-bold mr-1 text-gray-600">
          <a :href="href"> Hooyu </a>
        </label>
      </router-link>
      <label class="text-xs text-white rounded bg-gray-800 px-1 py-0.5 font-bold">PRO</label>
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
            <svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 512 512'><title>Person</title><path d='M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/><path d='M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/></svg>
          </template>
        </sidebar-item>
        <sidebar-item text="设置" :to="{ name: 'Setting' }">
          <template #icon>
            <svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 512 512'><title>Settings</title><path d='M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/></svg>
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
              <svg xmlns='http://www.w3.org/2000/svg' class='w-5 h-5' viewBox='0 0 512 512'><title>Log Out</title><path d='M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/></svg>
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
