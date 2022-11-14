<template>
  <div class>
    <WeatherForecast class="mb-7"></WeatherForecast>
    <div class="flex">
      <WeatherNow class="mr-4 flex w-1/2 flex-col"></WeatherNow>
      <div class="flex w-1/2 flex-col">
        <SunriseSundown class="mb-7"></SunriseSundown>
        <AirQuality></AirQuality>
      </div>
    </div>
  </div>
</template>
<script>
import AirQuality from './AirQuality.vue'
import SunriseSundown from './SunriseSundown.vue'
import WeatherForecast from './WeatherForecast.vue'
import WeatherNow from './WeatherNow.vue'

export default {
  components: { WeatherForecast, WeatherNow, SunriseSundown, AirQuality },
}
</script>
<style></style>
