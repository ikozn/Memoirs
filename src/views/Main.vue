<template>
  <section class="me-container">
    <aside class="aside">
      <sidebar></sidebar>
    </aside>
    <main class="main">
      <router-view />
    </main>
  </section>
</template>

<script lang="ts">
import Sidebar from '@/components/Sidebar.vue'
export default {
  components: {
    Sidebar
  }
}
</script>

<style>
.me-container {
  height: 100%;
  width: min-content;
  display: flex;
  margin: 0 auto;
}

.aside {
  width: 24rem;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  flex-shrink: 0;
  border:1px solid #42b983;
}
.main {
  height: 100%;
  width: 64rem;
  border:1px solid #fbeb53;
}

</style>
