import { createStore } from 'vuex'
import { getDayTime } from '@/helper'
// - 初始化LeanCloud
import AV from 'leancloud-storage'

const appId = process.env.VUE_APP_LEANCLOUD_ID
const appKey = process.env.VUE_APP_LEANCLOUD_KEY
const serverURL = process.env.VUE_APP_LEANCLOUD_URL
AV.init({ appId, appKey, serverURL })
const { User } = AV
const Memoires = AV.Object.extend('Memoires')
const testMemoList = [
  {
    date: new Date('2021-05-24'),
    memos: [
      {
        memo: '起床',
        time: new Date().getTime()
      },
      {
        memo: '锻炼',
        time: new Date().getTime()
      },
      {
        memo: '吃饭',
        time: new Date().getTime()
      }
    ]
  },
  {
    date: new Date('2021-05-23'),
    memos: [
      {
        memo: '起床',
        time: new Date().getTime()
      },
      {
        memo: '锻炼',
        time: new Date().getTime()
      },
      {
        memo: '吃饭',
        time: new Date().getTime()
      }
    ]
  }
]

export interface MemoProps {
  id: string;
  memo: string;
  time: number;
}

export interface MemosProps {
  [key: string]: MemoProps;
}

export interface MemoItem {
  date: number,
    memos: {
      [key: string]: MemoProps
    }

}
export interface GlobalDataProps {
  memoList: {
    [key: number]: MemoItem
  }
}

export default createStore<GlobalDataProps | string>({
  state: {
    memoList: {}
  },
  mutations: {
    Logout (state) {
      (state as GlobalDataProps).memoList = {}
    },
    addMemo (state, { memoData }) {
      const { memoList } = state as GlobalDataProps

      // - 获取数据
      const id = memoData.id
      const time = memoData.createdAt
      const memo = memoData.get('memo')
      const dateTime = getDayTime(time).getTime()

      // - 初始化列表
      if (!memoList[dateTime]) {
        memoList[dateTime] = {
          date: dateTime,
          memos: {}
        }
      }

      // - 添加数据
      memoList[dateTime].memos[id] = {
        id,
        memo,
        time
      }
    },
    getMemos (state, memos) {
      // - 循环添加数据
      for (const item of memos) {
        this.commit('addMemo', { memoData: item })
      }
    }
  },
  actions: {
    async Login (state, { username, password }) {
      return User.logIn(username, password)
    },
    async Logout ({ commit }) {
      commit('Logout')
      return User.logOut()
    },
    async addMemo ({ commit }, { memo }) {
      const owner = User.current()
      const newMemo = await new Memoires().save({ memo, owner })
      commit('addMemo', { memoData: newMemo })
      return newMemo
    },
    async getMemos ({ commit }, { startDay, endDay }) {
      const query = new AV.Query('Memoires')
      // 1. 设置当前用户
      query.equalTo('owner', User.current())

      // 2. 设置日期范围
      query.greaterThanOrEqualTo('createdAt', getDayTime(startDay))
      query.lessThan('createdAt', getDayTime(endDay))

      const memos = await query.find()

      commit('getMemos', memos)
      return memos
    }
  },
  getters: {
    getMemoList: (state) => (state as GlobalDataProps).memoList
  },
  modules: {}
})
