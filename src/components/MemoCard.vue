<template>
      <div class="w-full">
        <div class="flex justify-center pt-4 px-5 ">
            <div class="w-full">
                <div
                  :class="{ 'border-2 border-blue-400': isToday }"
                  class="bg-white shadow-sm rounded px-3 py-2 hover:shadow-md transition-shadow">
                    <div class="flex justify-between items-start text-gray-700 text-lg font-semibold py-2 px-2">
                      <span class="date">
                        <span>{{ day }}</span>
                      </span>
                      <span class="more cursor-pointer">
                        <span class="text-gray-300 text-sm"> {{ weekDay }} </span>
                        <!-- <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4.5 10.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S6 12.825 6 12s-.675-1.5-1.5-1.5zm15 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S21 12.825 21 12s-.675-1.5-1.5-1.5zm-7.5 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5z"/></svg> -->
                      </span>
                    </div>
                    <div class="pb-3 text-sm">
                      <!-- memo 项目 -->
                        <memo-item v-for="memo in memoSort" :key="memo" :memo="memo.memo" :time="memo.time" :id="memo.id"></memo-item>
                    </div>
                    <!-- <div v-if="isToday" class="flex text-sm text-right pb-1 px-3 rounded-b-sm">
                      <span class="bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full uppercase text-xs">今天</span>
                    </div> -->
                    <!-- <div class="block bg-gray-100 text-sm text-right py-2 px-3 -mx-3 -mb-2 rounded-b-sm">
                        <button class="hover:text-gray-600 text-gray-200 font-bold py-2 px-4">
                            删除
                        </button>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            编辑
                        </button>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from 'vue'
import MemoItem from '@/components/MemoItem.vue'
import { splitDate, objToArray, formatWeekDay } from '@/helper'
import { MemosProps } from '@/store'

export default defineComponent({
  props: {
    date: {
      type: Number,
      required: true
    },
    memos: {
      type: Object as PropType<MemosProps>,
      required: true
    }
  },
  components: {
    MemoItem
  },
  setup (props) {
    const memoSort = computed(() => {
      return objToArray(props.memos).sort((a, b) => b.time - a.time)
    })
    // 格式化当天数据
    const day = computed(() => {
      const { year, month, day } = splitDate(props.date)
      return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`
    })

    // 判断是否是今天
    const isToday = new Date(props.date).toDateString() === new Date().toDateString()

    // 格式化星期
    const weekDay = formatWeekDay(props.date)
    return {
      weekDay,
      isToday,
      memoSort,
      day
    }
  }
})
</script>

<style>

</style>
