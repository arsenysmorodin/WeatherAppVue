<template>
  <div class="flex">
    <input
      type="text"
      v-model="city"
      placeholder="Choose a city!"
      class="h-12 w-full rounded-l-xl bg-sky-50 p-3 text-lg text-gray-700 placeholder:text-gray-700 dark:bg-sky-700 dark:text-sky-300 dark:placeholder:text-sky-300"
      @enter="getCity"
    />
    <button
      class="h-12 w-12 rounded-r-xl bg-sky-50 bg-center bg-no-repeat backdrop-opacity-50 dark:bg-sky-700"
      :style="css"
      @click="getCity"
    ></button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      city: '',
    }
  },
  computed: {
    css() {
      if (this.$store.state.isDarkMode) {
        return {
          backgroundImage: `url(${require('@/assets/img/searchLight.png')})`,
          backgroundSize: '2rem 2rem',
        }
      } else {
        return {
          backgroundImage: `url(${require('@/assets/img/search.png')})`,
          backgroundSize: '2rem 2rem',
        }
      }
    },
  },
  methods: {
    async getCity() {
      const axios = require('axios')

      try {
        const response = await axios.get(
          `https://api.api-ninjas.com/v1/geocoding?city=${this.city}`,
          {
            headers: {
              'X-Api-Key': 'rWO+DtnhNoxc+ZpQ22GGdw==br3eM82znBrBK1yj',
            },
          }
        )
        if (!response.data[0]) {
          alert('Incorrect city name!')
        } else {
          this.$store.dispatch('addLocation', response.data[0])
        }
        this.city = ''
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>
<style></style>
