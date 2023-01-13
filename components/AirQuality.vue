<template>
  <div
    :style="css"
    class="flex h-56 flex-col rounded-xl bg-white p-5 pb-10 shadow-lg shadow-slate-200 dark:bg-sky-800 dark:shadow-none"
  >
    <h3 class="mb-5 text-lg text-gray-700 dark:text-sky-300">Air quality</h3>
    <div class="flex w-full">
      <p class="w-full self-center pt-4 text-center text-5xl dark:text-sky-100">
        {{ airQualityTitle }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useStore } from '@nuxtjs/composition-api'

const store = useStore()

const css = ref({
  backgroundImage: `url(${require('@/assets/img/aq.png')})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '9rem 9rem',
  backgroundPosition: 'bottom 20px left 20px',
})
let airQuality = ref(null)

const airQualityTitle = computed(() => {
  if (airQuality.value > 301) {
    return 'Hazardous'
  } else if (airQuality.value > 201) {
    return 'Very unhealthy'
  } else if (airQuality.value > 101) {
    return 'Unhealthy'
  } else if (airQuality.value > 51) {
    return 'Moderate'
  } else {
    return 'Good'
  }
})

const location = () => {
  return store.state.locations[store.state.index]
}

let storeIndex = () => {
  return store.state.index
}

let storeLocations = () => {
  return store.state.locations
}

const getAirQuality = async () => {
  const axios = require('axios')

  try {
    const response = await axios.get(
      `http://api.airvisual.com/v2/nearest_city?lat=${
        location().latitude
      }&lon=${location().longitude}&key=1c1b9d4b-113d-4b61-8fd9-e8e601111f46`
    )
    let result = response.data.data.current.pollution.aqius
    airQuality.value = result
  } catch (error) {
    console.error(error)
  }
}

watch(storeIndex, (newValue, oldValue) => {
  getAirQuality()
})

watch(
  storeLocations,
  (newValue, oldValue) => {
    getAirQuality()
  },
  { deep: true }
)

onMounted(() => {
  getAirQuality()
})
</script>
