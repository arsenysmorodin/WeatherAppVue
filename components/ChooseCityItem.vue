<template>
  <div class="item mb-5 flex flex-row items-center justify-between">
    <p @click="changeIndex(index)" class="text-lg text-gray-700">
      <slot></slot>
    </p>
    <button
      class="btn mr-8 hidden h-full w-full bg-center bg-no-repeat text-transparent"
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
    return {
      css: {
        backgroundImage: `url(${require('@/assets/img/delete.png')})`,
        backgroundSize: '1rem 1rem',
      },
    }
  },
  props: {
    index: {
      type: Number,
      required: true,
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
