<template>
  <div class="rounded-xl bg-white p-5 shadow-lg shadow-slate-200">
    <h3 class="mb-5 text-lg text-gray-700">Weather now</h3>
    <div class="flex flex-wrap">
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
      typesOfChildrens: ['Temperature', 'Conditions', 'Wind'],
    }
  },
  async mounted() {
    const axios = require('axios')

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=55&lon=37&appid=a158065199118bd588aed3a9d406f38f&units=metric`
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
}
</script>

<style></style>
