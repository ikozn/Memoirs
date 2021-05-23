<template>
  <router-link
          :to="to ? to : {}"
          v-slot="{ href, isActive, isExactActive }"
          custom
        >
          <li
            class="my-px rounded-sm hover:bg-gray-200"
            :class="[
              isActive && 'router-link-activ',
              isExactActive && 'router-link-exact-active bg-blue-500 text-white',
            ]"
          >
            <a
              :href="href"
              class="flex flex-row items-center h-10 px-4 text-gray-600"
            >
              <span
                class="flex items-center justify-center text-sm text-gray-400 icon"
              >
              <slot name="icon"></slot>
              </span>
              <span class="ml-3 text"> {{text}} </span>
            </a>
          </li>
        </router-link>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
export default defineComponent({
  props: {
    text: {
      type: String,
      required: true
    },
    to: {
      type: Object
    }
  },
  setup (props) {
    return {
      ...toRefs(props)
    }
  }
})
</script>

<style>
.router-link-exact-active .icon, .router-link-exact-active .text {
  color: white;
}
</style>
