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

#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
