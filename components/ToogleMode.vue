<template>
  <button :style="css" class="h-12 w-12" @click="toogleMode"></button>
</template>
<script>
export default {
  methods: {
    toogleMode() {
      this.$store.dispatch('toogleDarkMode')
    },
  },
  computed: {
    css() {
      if (this.$store.state.isDarkMode) {
        return {
          backgroundImage: `url(${require('@/assets/img/lightMode.png')})`,
          backgroundSize: '3rem 3rem',
        }
      } else {
        return {
          backgroundImage: `url(${require('@/assets/img/darkMode.png')})`,
          backgroundSize: '3rem 3rem',
        }
      }
    },
  },
}
</script>
<style></style>
