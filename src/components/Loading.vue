<template>
  <div class="relative w-full h-full">
    <slot>
    </slot>
    <slot name="loading">
      <div v-if="loading" class="loading flex items-center justify-center w-full h-full text-black absolute bottom-0 left-0">
        <span class="loadingIcon"></span>
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    loading: {
      type: Boolean,
      required: true
    }
  }
  // inheritAttrs: false
})
</script>

<style scoped>
.loading {
  background-color: #fafafa;
}

.loadingIcon {
    display: block;
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 15px auto;
    transform: rotate(360deg);
    animation: rotate 45s infinite linear;
}

.loadingIcon::before {
    position: absolute;
    content: "";
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    box-sizing: border-box;
    border-radius: 50%;
    border-top: 3px solid #3b82f6;
    border-left: 3px solid #3b82f6;
    border-bottom: 3px solid transparent;
    border-right: 3px solid transparent;
    transform: rotate(720deg);
    animation: rotate 3s infinite ease-out;
}

.loadingIcon::after {
    position: absolute;
    content: "";
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    box-sizing: border-box;
    border-radius: 50%;
    border-bottom: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid #fafafa;
    border-left: 7px solid #fafafa;
    transform: rotate(720deg);
    animation: rotate 3s infinite ease-in-out;
}

@keyframes rotate {
    100% {
        transform: rotate(0deg);
    }
}
</style>
