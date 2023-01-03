<template>
  <div>
    <p class="text-6xl font-bold text-sky-400 dark:text-sky-100">
      {{ time }}, {{ this.location.name }}
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: '',
    }
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
  methods: {
    getTime() {
      const axios = require('axios')
      axios
        .get(
          `https://api.ipgeolocation.io/timezone?apiKey=211cb7d11abf44df83ca37cffd091bfc&lat=${this.location.latitude}&long=${this.location.longitude}`
        )
        .then((response) => {
          console.log(response)
          this.time = response.data.time_24.slice(0, 5)
        })
    },
  },
  mounted() {
    this.getTime()
  },
  watch: {
    storeIndex() {
      this.getTime()
    },
    storeLocations() {
      this.getTime()
    },
  },
}
</script>
<style></style>
