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
        :cartType="typesOfChildrens[index]"
      ></WeatherNowItem>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weather: {},
      typesOfChildrens: ['Conditions', 'Temperature', 'Wind'],
    }
  },
  methods: {
    async getWeather() {
      const axios = require('axios')

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${this.location.latitude}&lon=${this.location.longitude}&appid=a158065199118bd588aed3a9d406f38f&units=metric`
        )
        let result = response.data
        let weatherData = {
          temperature: Math.round(result.main.temp),
          wind: Math.round(result.wind.speed),
          conditions: result.weather[0].main,
        }
        this.weather = weatherData
      } catch (error) {
        console.error(error)
      }
    },
  },
  mounted() {
    this.getWeather()
  },
  watch: {
    storeIndex() {
      this.getWeather()
    },
    storeLocations() {
      this.getWeather()
    },
  },
  computed: {
    location() {
      let location = this.$store.state.locations[this.$store.state.index]
      return location
    },
    storeIndex() {
      return this.$store.state.index
    },
    storeLocations() {
      return this.$store.state.locations
    },
  },
}
</script>

<style></style>
