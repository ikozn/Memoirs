import { onUnmounted } from 'vue'

function useDOMCreate (nodeId: string, CLASS = '') {
  const node = document.createElement('div')
  node.id = nodeId
  node.classList.value = CLASS
  document.body.appendChild(node)
  onUnmounted(() => {
    document.body.removeChild(node)
  })
  return node
}

export default useDOMCreate
