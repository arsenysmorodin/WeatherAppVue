<template>
  <button :style="css" class="h-12 w-12" @click="toogleMode"></button>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from '@nuxtjs/composition-api'

const store = useStore()

const toogleMode = () => {
  store.dispatch('toogleDarkMode')
}

const css = computed(() => {
  if (store.state.isDarkMode) {
    return {
      backgroundImage: `url(${require('@/assets/img/lightMode.png')})`,
      backgroundSize: '3rem 3rem',
    }
  } else {
    return {
      backgroundImage: `url(${require('@/assets/img/darkMode.png')})`,
      backgroundSize: '3rem 3rem',
    }
  }
})
</script>
