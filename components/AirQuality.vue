<template>
  <div class="rounded-xl bg-white p-5 pb-10 shadow-lg shadow-slate-200">
    <h3 class="mb-5 text-lg text-gray-700">Air quality</h3>
    <div class="flex">
      <img class="w-1/4" :src="require(`~/assets/img/aq.png`)" />
      <p class="w-full pt-8 text-center text-5xl">
        {{ this.airQualityTitle }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      airQuality: null,
    }
  },
  computed: {
    airQualityTitle() {
      switch (this.airQuality) {
        case this.airQuality > 301:
          return 'Hazardous'
        case this.airQuality > 201:
          return 'Very unhealthy'
        case this.airQuality > 101:
          return 'Unhealthy'
        case this.airQuality > 51:
          return 'Moderate'
        default:
          return 'Good'
      }
    },
    location() {
      let location = this.$store.state.defaultLocation
      return location
    },
  },
  async mounted() {
    const axios = require('axios')

    try {
      const response = await axios.get(
        `http://api.airvisual.com/v2/nearest_city?lat=${this.location.lat}&lon=${this.location.lon}&key=1c1b9d4b-113d-4b61-8fd9-e8e601111f46`
      )
      let result = response.data.data.current.pollution.aqius
      this.airQuality = result
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  },
  mounted() {
    console.log(this.location)
  },
}
</script>
<style></style>
