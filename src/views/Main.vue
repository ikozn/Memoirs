<template>
  <section class="main-container">
    <aside class="aside overflow-hidden">
      <sidebar :username="username"></sidebar>
    </aside>
    <main class="main">
      <router-view />
    </main>
  </section>
</template>

<script lang="ts">
import Sidebar from '@/components/Sidebar.vue'
import AV from 'leancloud-storage'

export default {
  components: {
    Sidebar
  },
  setup () {
    const currentUser = AV.User.current()
    const { username } = currentUser.attributes

    return {
      username
    }
  }
}
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
