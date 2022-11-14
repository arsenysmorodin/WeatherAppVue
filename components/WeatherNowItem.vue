<template>
  <div :class="{ 'w-full': isBig, 'w-1/2': !isBig }" class="w-1/2">
    <div class="flex">
      <img class="w-1/3" :src="require(`~/assets/img/${imageType}.png`)" />
      <p
        :class="{ 'text-5xl': isBig, '-ml-28': isBig, 'text-3xl': !isBig }"
        class="-ml-10 w-2/3 self-center text-center"
      >
        {{ weatherData[this.cartTypeLowerCase] }}
        <span v-if="cartType === 'Temperature'">°C</span>
        <span v-if="cartType === 'Wind'">km/s</span>
      </p>
    </div>
    <p class="text-center text-base font-light text-gray-700">
      {{ cartType }}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    cartTypeLowerCase() {
      return this.cartType.toLowerCase()
    },
    getContent() {
      this.weatherData[this.cartType.toLowerCase()]
    },
    isBig() {
      if (this.cartType === 'Temperature') {
        return true
      } else {
        return false
      }
    },

    imageType() {
      let imageType = this.cartType.slice(0, 4).toLowerCase()

      if (imageType === 'cond') {
        switch (this.weatherData.conditions) {
          case 'Thunderstorm':
            imageType = 'weather/thunderstorm'
            break
          case 'Clear':
            imageType = 'weather/clear'
            break
          case 'Clouds':
            imageType = 'weather/clouds'
            break
          case 'Rain' || 'Drizzle':
            imageType = 'weather/rain'
            break
          case 'Snow':
            imageType = 'weather/snow'
            break
          default:
            imageType = 'weather/fog'
            break
        }
      }
      return imageType
    },
  },
  mounted() {
    console.log(this.cartType.toLowerCase())
  },
  props: {
    weatherData: {
      type: Object,
      required: true,
    },
    cartType: {
      type: String,
      required: true,
    },
    // index: {
    //   type: Number,
    //   required: true,
    // },
  },
}
</script>

<style></style>
