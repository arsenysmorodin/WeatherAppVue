<template>
  <div class="flex w-full justify-between">
    <WeatherForecastItem
      v-for="(item, index) in weatherData"
      :imgUrl="item.weather[0].main.toLowerCase()"
      :key="index"
    >
      <template v-slot:temp>{{ Math.round(item.main.temp) }}</template>
      <template v-slot:day>{{ getDaysOfWeek[index] }}</template>
    </WeatherForecastItem>
  </div>
</template>
<script>
export default {
  data() {
    return {
      weatherData: [],
    }
  },

  computed: {
    getDaysOfWeek() {
      let daysOfWeek = []
      let allDays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ]
      let currentDay = new Date()
      currentDay = currentDay.getDay()
      daysOfWeek = allDays.splice(currentDay + 1, 5)
      switch (daysOfWeek.length) {
        case 4:
          daysOfWeek.push('Sunday')
          break
        case 3:
          daysOfWeek.push('Sunday', 'Monday')
          break
        case 2:
          daysOfWeek.push('Sunday', 'Monday', 'Tuesday')
          break
        case 1:
          daysOfWeek.push('Sunday', 'Monday', 'Tuesday', 'Wednesday')
          break
        case 1:
          daysOfWeek.push(
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday'
          )
          break
      }
      return daysOfWeek
    },
    location() {
      let location = this.$store.state.locations[this.$store.state.index]
      return location
    },
    storeIndex() {
      return this.$store.state.index
    },
  },
  watch: {
    async storeIndex() {
      const axios = require('axios')

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${this.location.latitude}&lon=${this.location.longitude}&appid=a158065199118bd588aed3a9d406f38f&units=metric`
        )
        let result = response.data.list
        let now = new Date()
        let h = now.getHours()
        let num = 8 - Math.floor(h / 3)
        let weatherData = [
          result[num + 3],
          result[num + 3 + 8],
          result[num + 3 + 16],
          result[num + 3 + 24],
          result[num + 3 + 31],
        ]
        this.weatherData = weatherData
      } catch (error) {
        console.error(error)
      }
    },
  },

  async mounted() {
    const axios = require('axios')

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${this.location.latitude}&lon=${this.location.longitude}&appid=a158065199118bd588aed3a9d406f38f&units=metric`
      )
      let result = response.data.list
      let now = new Date()
      let h = now.getHours()
      let num = 8 - Math.floor(h / 3)
      let weatherData = [
        result[num + 3],
        result[num + 3 + 8],
        result[num + 3 + 16],
        result[num + 3 + 24],
        result[num + 3 + 31],
      ]
      this.weatherData = weatherData
    } catch (error) {
      console.error(error)
    }
  },
}
</script>
<style></style>
