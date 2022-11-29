<template>
  <div class="item mb-5 flex flex-row items-center justify-between">
    <p
      @click="changeIndex(index)"
      class="w-56 text-lg text-gray-700 dark:text-sky-100"
    >
      <slot></slot>
    </p>
    <button
      class="btn mr-4 hidden h-full w-full bg-center bg-no-repeat text-transparent"
      :style="css"
      @click="deleteLocation(index)"
    >
      x
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    css() {
      if (this.$store.state.isDarkMode) {
        return {
          backgroundImage: `url(${require('@/assets/img/deleteLight.png')})`,
          backgroundSize: '1rem 1rem',
        }
      } else {
        return {
          backgroundImage: `url(${require('@/assets/img/delete.png')})`,
          backgroundSize: '1rem 1rem',
        }
      }
    },
  },
  methods: {
    changeIndex(index) {
      this.$store.dispatch('changeIndex', index)
    },
    deleteLocation(index) {
      this.$store.dispatch('deleteLocation', index)
    },
  },
}
</script>
<style>
.item:hover .btn {
  display: block;
}
</style>
