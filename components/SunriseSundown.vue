<template>
  <div
    class="rounded-xl bg-white p-5 shadow-lg shadow-slate-200 dark:bg-sky-800 dark:shadow-none"
  >
    <h3 class="mb-5 text-lg text-gray-700 dark:text-sky-300">Sun movement</h3>
    <div class="flex">
      <SunriseSundownItem type="sunrise">
        {{ sunData.sunrise }}
      </SunriseSundownItem>
      <SunriseSundownItem type="sunset">
        {{ sunData.sunset }}
      </SunriseSundownItem>
    </div>
  </div>
</template>

<script>
import SunriseSundownItem from './SunriseSundownItem.vue'

export default {
  data() {
    return {
      sunData: {},
    }
  },
  methods: {
    getSunTime() {
      const axios = require('axios')
      axios
        .get(
          `https://api.ipgeolocation.io/astronomy?apiKey=211cb7d11abf44df83ca37cffd091bfc&lat=${this.location.latitude}&long=${this.location.longitude}`
        )
        .then((response) => {
          console.log(response.data)
          this.sunData = {
            sunrise: response.data.sunrise,
            sunset: response.data.sunset,
          }
        })
    },
  },
  watch: {
    storeIndex() {
      this.getSunTime()
    },
    storeLocations() {
      this.getSunTime()
    },
  },
  mounted() {
    this.getSunTime()
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
  components: { SunriseSundownItem },
}
</script>

<style></style>
