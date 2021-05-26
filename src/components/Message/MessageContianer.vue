<template>
 <teleport to="#message">
    <transition-group name="message-list">
        <div v-for="message of messages" :key="message" class="message-list-item w-full" >
          <message v-bind="{...message}" @message-on-close="closeMessage(message.key)" />
        </div>
    </transition-group>
  </teleport>
</template>

<script>
import { defineComponent } from 'vue'
import Message from '@/components/Message/Message.vue'
export default defineComponent({
  components: {
    Message
  },
  props: {
    messages: {
      type: Object
    }
  },
  setup (props) {
    // 关闭某个Message
    const closeMessage = (key) => {
      if (props.messages[key]) props.messages[key].close()
    }

    return {
      closeMessage
    }
  }
})
</script>

<style>
.message-list-item {
  transition: all .3s ease;
}

.message-list-enter-from,
.message-list-leave-to {
  position: absolute;
  opacity: 0;
}

.message-list-enter-to,
.message-list-leave-active {
  position: absolute;
  top: -100px;
}

</style>
