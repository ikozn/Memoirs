<template>
  <div class="flex items-center justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-sm px-2 py-2">
    <span class="bg-indigo-500 h-2 w-2 m-2 rounded-full"></span>
    <div class="flex-grow font-medium px-2"> {{memo}} </div>
    <div class="text-sm font-normal text-gray-500 tracking-wide"> {{timeStr}} </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
// import { MemoProps } from '@/store'
export default defineComponent({
  props: {
    memo: {
      type: String,
      required: true
    },
    time: {
      type: Object as PropType<Date>,
      required: true
    }
  },
  setup (props) {
    const date = new Date(props.time)
    const hour = ('' + date.getHours()).padStart(2, '0')
    const minute = ('' + date.getMinutes()).padStart(2, '0')
    const second = ('' + date.getSeconds()).padStart(2, '0')

    const timeStr = `${hour}:${minute}:${second}`
    return {
      timeStr
    }
  }
})
</script>

<style>
</style>
