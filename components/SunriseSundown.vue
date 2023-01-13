<template>
  <div
    class="rounded-xl bg-white p-5 shadow-lg shadow-slate-200 dark:bg-sky-800 dark:shadow-none"
  >
    <h3 class="mb-5 text-lg text-gray-700 dark:text-sky-300">Sun movement</h3>
    <div class="flex">
      <SunriseSundownItem typeImg="sunrise">
        {{ sunData.sunrise }}
      </SunriseSundownItem>
      <SunriseSundownItem typeImg="sunset">
        {{ sunData.sunset }}
      </SunriseSundownItem>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useStore } from '@nuxtjs/composition-api'

const sunData = ref({
  sunrise: null,
  sunset: null,
})

const getSunTime = () => {
  const axios = require('axios')
  axios
    .get(
      `https://api.ipgeolocation.io/astronomy?apiKey=211cb7d11abf44df83ca37cffd091bfc
      &lat=${location().latitude}
      &long=${location().longitude}`
    )
    .then((response) => {
      sunData.value.sunrise = response.data.sunrise
      sunData.value.sunset = response.data.sunset
    })
}

onMounted(() => {
  getSunTime()
})

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

watch(storeIndex, (newValue, oldValue) => {
  getSunTime()
})

watch(
  storeLocations,
  (newValue, oldValue) => {
    getSunTime()
  },
  { deep: true }
)
</script>
