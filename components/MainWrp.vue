<template>
  <div class>
    <WeatherForecast class="mb-7"></WeatherForecast>
    <div class="flex">
      <WeatherNow class="mr-4 flex w-1/2 flex-col"></WeatherNow>
      <div class="flex w-1/2 flex-col">hello</div>
    </div>
  </div>
</template>
<script>
import WeatherForecast from './WeatherForecast.vue'
import WeatherNow from './WeatherNow.vue'

export default { components: { WeatherForecast, WeatherNow } }
</script>
<style></style>
