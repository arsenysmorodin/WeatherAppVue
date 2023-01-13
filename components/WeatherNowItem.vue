<template>
  <div
    class="flex flex-col"
    :style="css"
    :class="{ 'h-40 w-full': isBig, 'w-1/2': !isBig }"
  >
    <div class="flex h-full justify-between">
      <p
        :class="{ 'h-36 text-5xl': isBig, 'text-3xl': !isBig }"
        class="flex w-full justify-center self-center text-center"
      >
        <span class="my-auto w-full text-center dark:text-sky-100">
          {{ weatherData[cartTypeLowerCase] }}
          <span v-if="cartType === 'Temperature'">°C</span>
          <span v-if="cartType === 'Wind'">km/s</span>
        </span>
      </p>
    </div>
    <p class="text-center text-base font-light text-gray-700 dark:text-sky-300">
      {{ cartType }}
    </p>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'

const props = defineProps({
  weatherData: {
    type: Object,
    required: true,
  },
  cartType: {
    type: String,
    required: true,
  },
})

const imageType = computed(() => {
  let imageType = cartTypeLowerCase.value.slice(0, 4)

  if (imageType === 'cond') {
    switch (props.weatherData.conditions) {
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
})

const cartTypeLowerCase = computed(() => {
  return props.cartType.toLowerCase()
})

const isBig = computed(() => {
  if (props.cartType === 'Conditions') {
    return true
  } else {
    return false
  }
})

const css = computed(() => {
  if (isBig.value) {
    return {
      backgroundImage: `url(${require('@/assets/img/' +
        imageType.value +
        '.png')})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '12rem 12rem',
      backgroundPosition: 'left',
    }
  } else {
    return {
      backgroundImage: `url(${require('@/assets/img/' +
        imageType.value +
        '.png')})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '5rem 5rem',
      backgroundPosition: 'left',
    }
  }
})

onMounted(() => {
  console.log('type' + imageType.value)
})
</script>
