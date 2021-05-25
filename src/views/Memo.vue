<template>
  <div class="flex flex-col h-full">
    <!-- header -->
    <div class="flex flex-grow-0 justify-between text-gray-700 pt-4 px-5">
      <h1 class="text-lg font-bold">MEMO</h1>
      <div class="search">
        <div class="flex items-center bg-gray-200 rounded-sm">
          <div class="pl-2">
            <svg
              class="fill-current text-gray-500 w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                class="heroicon-ui"
                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
              />
            </svg>
          </div>
          <input
            class="w-full rounded-sm bg-gray-200 text-gray-600 leading-tight focus:outline-none py-2 px-2 text-xs"
            id="search"
            type="text"
          />
        </div>
      </div>
    </div>

    <!-- memo输入 -->
    <div class="flex flex-grow-0 items-center justify-center w-full pt-4 px-5">

        <form class="w-full rounded-sm bg-white border-2 border-gray-300 overflow-hidden">
          <loading :loading="inSubmit">
                <div class="flex flex-col">
                  <div class="w-full">
                    <input v-focus v-model="memo" class="resize-none w-full font-medium text-sm placeholder-gray-400 focus:outline-none p-4">
                  </div>
                  <div class="w-full flex items-start justify-end">
                    <button @click.prevent="submitMemo"
                    :class="[
                      memo.trim() !== '' && 'bg-blue-500 cursor-pointer',
                      memo.trim() === '' && 'bg-blue-200 cursor-not-allowed',
                    ]"
                    class="blocktext-xs text-center text-white  py-1.5 px-3 rounded-sm mr-2 mb-2 focus:outline-none">
                      记录
                    </button>
                  </div>
                </div>
          </loading>
        </form>

      </div>

    <!-- memo list -->
    <loading :loading="loadMemos" class="memo-list flex-grow overflow-y-scroll overscroll-x-hidden pb-6">
          <memo-card v-for="memos in memoList" :key="memos" :date="memos.date" :memos="memos.memos"></memo-card>
    </loading>
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { MemoItem } from '@/store'
import MemoCard from '@/components/MemoCard.vue'
import Loading from '@/components/Loading.vue'
import { objToArray, getAfterDaysTime, getBeforeDaysTime, getDayTime } from '@/helper'

export default defineComponent({
  components: {
    MemoCard,
    Loading
  },
  setup () {
    const store = useStore()
    const DAYS = 2

    // - 获取Memo数据
    // 1. 设置初始日期区间
    const endDay = getAfterDaysTime(getDayTime(new Date()), 1)
    const startDay = getBeforeDaysTime(endDay, DAYS)

    // 2. 获取区间内数据
    const loadMemos = ref(true)
    store.dispatch('getMemos', { startDay, endDay })
      .finally(() => {
        loadMemos.value = false
      })

    const memo = ref('')
    // - 将memoList转换为数组并排序
    const memoList = computed(() => {
      const result = objToArray(store.getters.getMemoList).sort((a, b) => (b as MemoItem).date - (a as MemoItem).date)
      return result
    })

    // - 提交新Memo
    const inSubmit = ref(false)
    const submitMemo = async () => {
      if (memo.value.trim() !== '') {
        inSubmit.value = true
        store.dispatch('addMemo', { memo: memo.value })
          .then(() => {
            memo.value = ''
          }).finally(() => {
            inSubmit.value = false
          })
      }
    }

    return {
      loadMemos,
      memo,
      memoList,
      inSubmit,
      submitMemo
    }
  }
})
</script>

<style>
.memo-list::-webkit-scrollbar {
   width: 0 !important
}
</style>
