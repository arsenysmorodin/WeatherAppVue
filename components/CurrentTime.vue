<template>
  <div>
    <p class="text-6xl font-bold text-sky-400 dark:text-sky-100">
      {{ hour }}:{{ minutes }}, {{ this.location.name }}
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hour: '',
      minutes: '',
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
      const date = new Date()

      this.hour = String(date.getHours())
      this.minutes = String(date.getMinutes())

      if (this.minutes.length === 1) {
        this.minutes = '0' + this.minutes
      }
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
