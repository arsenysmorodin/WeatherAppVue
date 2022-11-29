<template>
  <div
    class="flex flex-col"
    :style="css"
    :class="{ 'h-40 w-full': isBig, 'w-1/2': !isBig }"
  >
    <div class="flex h-full justify-between">
      <!-- <img class="w-1/3" :src="require(`~/assets/img/${imageType}.png`)" /> -->
      <p
        :class="{ 'h-36 text-5xl': isBig, 'text-3xl': !isBig }"
        class="flex w-full justify-center self-center text-center"
      >
        <span class="my-auto w-full text-center">
          {{ weatherData[this.cartTypeLowerCase] }}
          <span v-if="cartType === 'Temperature'">°C</span>
          <span v-if="cartType === 'Wind'">km/s</span>
        </span>
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
      if (this.cartType === 'Conditions') {
        return true
      } else {
        return false
      }
    },
    css() {
      if (this.isBig) {
        return {
          backgroundImage: `url(${require('@/assets/img/' +
            this.imageType +
            '.png')})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '12rem 12rem',
          backgroundPosition: 'left',
        }
      } else {
        return {
          backgroundImage: `url(${require('@/assets/img/' +
            this.imageType +
            '.png')})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '5rem 5rem',
          backgroundPosition: 'left',
        }
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
