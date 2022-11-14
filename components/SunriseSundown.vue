<template>
  <div class="rounded-xl bg-white p-5 shadow-lg shadow-slate-200">
    <h3 class="mb-5 text-lg text-gray-700">Sun movement</h3>
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
  async mounted() {
    const axios = require('axios')
    try {
      const response = await axios.get(
        `https://api.bf5.ru/sun?lat=55.7522200&lon=37.6155600`
      )
      this.sunData = response.data
    } catch (error) {
      console.error(error)
    }
  },
  components: { SunriseSundownItem },
}
</script>

<style></style>
