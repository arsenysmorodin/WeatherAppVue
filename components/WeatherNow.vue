<template>
  <div
    class="rounded-xl bg-white p-5 shadow-lg shadow-slate-200 dark:bg-sky-800 dark:shadow-none"
  >
    <h3 class="mb-5 text-lg text-gray-700 dark:text-sky-300">Weather now</h3>
    <div class="flex h-full flex-wrap">
      <WeatherNowItem
        v-for="(item, index) in typesOfChildrens"
        :key="item"
        :weatherData="weather"
        :cartType="item"
      ></WeatherNowItem>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useStore } from '@nuxtjs/composition-api'

const store = useStore()

const weather = ref({
  temperature: null,
  wind: null,
  conditions: null,
})
const typesOfChildrens = ref(['Conditions', 'Temperature', 'Wind'])

const getWeather = async () => {
  const axios = require('axios')

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${
        location().latitude
      }&lon=${
        location().longitude
      }&appid=a158065199118bd588aed3a9d406f38f&units=metric`
    )
    let result = response.data

    weather.value.temperature = Math.round(result.main.temp)
    weather.value.wind = Math.round(result.wind.speed)
    weather.value.conditions = result.weather[0].main
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getWeather()
  console.log(typesOfChildrens.value)
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

watch(storeIndex, (newValue, oldValue) => {
  getWeather()
})

watch(
  storeLocations,
  (newValue, oldValue) => {
    getWeather()
  },
  { deep: true }
)
</script>
