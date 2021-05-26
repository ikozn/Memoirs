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
        <span v-if="!loading" class="bg-indigo-500 h-2 w-2 m-2 rounded-full"></span>
        <span v-else class="animate-spin p-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-3 h-3"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 15a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1zm10-5a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1zM7 12a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1zm12.071 7.071a1 1 0 0 1-1.414 0l-2.121-2.121a1 1 0 0 1 1.414-1.414l2.121 2.12a1 1 0 0 1 0 1.415zM8.464 8.464a1 1 0 0 1-1.414 0L4.93 6.344a1 1 0 0 1 1.414-1.415L8.464 7.05a1 1 0 0 1 0 1.414zM4.93 19.071a1 1 0 0 1 0-1.414l2.121-2.121a1 1 0 1 1 1.414 1.414l-2.12 2.121a1 1 0 0 1-1.415 0zM15.536 8.464a1 1 0 0 1 0-1.414l2.12-2.121a1 1 0 0 1 1.415 1.414L16.95 8.464a1 1 0 0 1-1.414 0z"/></svg>
        </span>

      <form @submit.prevent class="flex flex-grow font-medium text-sm pl-2">
        <div :class="{'inputLoading': true}" class="flex-grow w-full">
            <input :disabled="loading" @keyup.esc="cancel" v-focus v-model="newMemo" type="text" class="outline-none w-full border-b">

        </div>
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
import Message from '@/components/Message'

export default defineComponent({
  // components: {
  // Loading
  // },
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
    const loading = ref(false)

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

      loading.value = true

      store.dispatch('updateMemo', { id: props.id, memo: newMemo.value, time: props.time })
        .then(() => {
          toShowMode()
        })
        .finally(() => {
          loading.value = false
          Message.success('保存成功')
        })
    }

    const del = () => {
      loading.value = true
      store.dispatch('delMemo', { id: props.id, time: props.time })
        .then(() => {
          toShowMode()
        })
        .finally(() => {
          loading.value = false
        })
      console.log('删除数据')
    }

    const cancel = () => {
      console.log('取消修改')
      toShowMode()
      newMemo.value = props.memo
    }

    return {
      loading,
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
