<template>
  <div>
    <p class="text-6xl font-bold text-sky-400 dark:text-sky-100">
      {{ time }}, {{ location().name }}
    </p>
  </div>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue'
import { useStore } from '@nuxtjs/composition-api'

let time = ref('')

const store = useStore()

const location = () => {
  return store.state.locations[store.state.index]
}

let storeIndex = () => {
  return store.state.index
}

let storeLocations = () => {
  return store.state.locations
}

const getTime = () => {
  const axios = require('axios')
  axios
    .get(
      `https://api.ipgeolocation.io/timezone?apiKey=211cb7d11abf44df83ca37cffd091bfc
      &lat=${location().latitude}
      &long=${location().longitude}`
    )
    .then((response) => {
      time.value = response.data.time_24.slice(0, 5)
    })
}

onMounted(() => {
  getTime()
})

watch(storeIndex, (newValue, oldValue) => {
  getTime()
})

watch(
  storeLocations,
  (newValue, oldValue) => {
    getTime()
  },
  { deep: true }
)
</script>
