<template>
  <div
    :style="css"
    class="h-full rounded-xl bg-white p-5 pb-10 shadow-lg shadow-slate-200"
  >
    <h3 class="mb-5 text-lg text-gray-700">Air quality</h3>
    <div class="mb-10 flex">
      <!-- <img class="w-1/4" :src="require(`~/assets/img/aq.png`)" /> -->
      <p class="w-full text-center text-5xl">
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
      css: {
        backgroundImage: `url(${require('@/assets/img/aq.png')})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '9rem 9rem',
        backgroundPosition: 'bottom 20px left 20px',
      },
    }
  },
  computed: {
    airQualityTitle() {
      if (this.airQuality > 301) {
        return 'Hazardous'
      } else if (this.airQuality > 201) {
        return 'Very unhealthy'
      } else if (this.airQuality > 101) {
        return 'Unhealthy'
      } else if (this.airQuality > 51) {
        return 'Moderate'
      } else {
        return 'Good'
      }
    },
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
  methods: {
    async getAirQuality() {
      const axios = require('axios')

      try {
        const response = await axios.get(
          `http://api.airvisual.com/v2/nearest_city?lat=${this.location.latitude}&lon=${this.location.longitude}&key=1c1b9d4b-113d-4b61-8fd9-e8e601111f46`
        )
        let result = response.data.data.current.pollution.aqius
        console.log(result)
        this.airQuality = result
      } catch (error) {
        console.error(error)
      }
    },
  },
  watch: {
    storeIndex() {
      this.getAirQuality()
    },
    storeLocations() {
      this.getAirQuality()
    },
  },
  mounted() {
    this.getAirQuality()
  },
}
</script>
<style></style>
