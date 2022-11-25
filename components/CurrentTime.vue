<template>
  <div>
    <p class="text-6xl font-bold text-sky-500">
      {{ currentTime.hour }}:{{ currentTime.minutes }}, {{ this.location.name }}
    </p>
  </div>
</template>
<script>
export default {
  computed: {
    currentTime() {
      const date = new Date()
      const currentTime = {
        hour: String(date.getHours()),
        minutes: String(date.getMinutes()),
      }
      if (currentTime.minutes.length === 1) {
        currentTime.minutes = '0' + currentTime.minutes
      }
      return currentTime
    },
    location() {
      let location = this.$store.state.locations[this.$store.state.index]
      return location
    },
    // async mounted() {
    //   const axios = require('axios')

    //   try {
    //     const response = await axios.get('http://worldtimeapi.org/api/ip')
    //     console.log(response.data.datetime.slice(11, 16))
    //   } catch (error) {
    //     console.error(error)
    //   }
    // },
  },
}
</script>
<style></style>
