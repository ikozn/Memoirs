<template>
  <router-view />
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { getDayTime, getBeforeDaysTime, getAfterDaysTime } from '@/helper'
export default {
  setup () {
    const store = useStore()
    const DAYS = 2

    // 1. 设置初始日期区间
    const endDay = getAfterDaysTime(getDayTime(new Date()), 1)
    const startDay = getBeforeDaysTime(endDay, DAYS)

    // 2. 获取区间内数据
    store.dispatch('getMemos', { startDay, endDay })
  }
}
</script>
