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
  },
}
</script>
<style></style>
