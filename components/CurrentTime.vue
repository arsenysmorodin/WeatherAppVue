<template>
  <div>
    <p class="text-6xl">{{ currentTime.hour }}:{{ currentTime.minutes }}</p>
  </div>
</template>
<script>
export default {
  //   data() {
  //     return {
  //       currentTime: '17:56',
  //     }
  //   },
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
  },
}
</script>
<style></style>
