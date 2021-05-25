<template>
  <div>
    <div v-if="mode == 'show'"  @click="toEditMode" class="flex items-center justify-start text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-sm px-2 py-2">
      <span class="bg-indigo-500 h-2 w-2 m-2 rounded-full"></span>
      <div class="flex-grow font-medium px-2">
        {{memo}}
      </div>
      <div class="text-sm font-normal text-gray-500 tracking-wide"> {{timeStr}} </div>
    </div>

    <div v-else  class="flex items-center justify-start text-gray-700 rounded-sm px-2 py-2">
      <span class="bg-indigo-500 h-2 w-2 m-2 rounded-full"></span>
      <form @submit.prevent class="flex flex-grow font-medium text-sm pl-2">
        <input @keyup.esc="cancel" v-focus v-model="newMemo" type="text" class="flex-grow outline-none w-full border-b">
        <button class="text-sm font-normal tracking-wide text-blue-500 px-2 whitespace-nowrap focus:outline-none" @click.prevent="save"> 保存 </button>
      </form>
      <span class="text-sm font-normal  tracking-wide text-blue-500 mr-2 cursor-pointer" @click="cancel" > 取消 </span>
      <span class="text-sm font-normal  tracking-wide text-red-500 cursor-pointer" @click="del"> 删除 </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import { useStore } from 'vuex'
import { splitTime } from '@/helper'

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true
    },
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
    const mode = ref('show')
    const store = useStore()

    // 格式化时间
    const date = new Date(props.time)
    const { hour, minute, second } = splitTime(date)
    const timeStr = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`

    const newMemo = ref(props.memo)

    const toEditMode = () => {
      // TODO 显示有草稿，是否恢复
      mode.value = 'edit'
    }

    const toShowMode = () => {
      mode.value = 'show'
    }

    const save = () => {
      if (newMemo.value === props.memo) {
        mode.value = 'show'
        return
      }

      store.dispatch('updateMemo', { id: props.id, memo: newMemo.value, time: props.time })
        .then(() => {
          toShowMode()
        })
    }

    const del = () => {
      store.dispatch('delMemo', { id: props.id, time: props.time })
        .then(() => {
          toShowMode()
        })
      console.log('删除数据')
    }

    const cancel = () => {
      console.log('取消修改')
      toShowMode()
      newMemo.value = props.memo
    }

    return {
      save,
      del,
      cancel,
      mode,
      newMemo,
      toEditMode,
      timeStr
    }
  }
})
</script>

<style>
</style>
