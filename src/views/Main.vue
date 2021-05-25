<template>
  <section class="main-container">
    <aside class="aside overflow-hidden">
      <sidebar :username="username" :day="day" :memoCount="memoCount"></sidebar>
    </aside>
    <main class="main">
      <router-view />
    </main>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from '@/components/Sidebar.vue'

export default defineComponent({
  components: {
    Sidebar
  },
  setup () {
    return {}
  }
})
</script>

<style>
.main-container {
  height: 100%;
  width: min-content;
  display: flex;
  margin: 0 auto;
}

.main {
  height: 100%;
}

.aside {
  width: 240px;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  flex-shrink: 0;
  /* border:1px solid #42b983; */
}
.main {
  height: 100%;
  width: 640px;
  /* border:1px solid #fbeb53; */
}

</style>
