<template>
  <div
    class="flex flex-col items-center rounded-xl bg-white p-4 text-center shadow-lg shadow-slate-200 dark:bg-sky-800 dark:shadow-none"
  >
    <img
      :src="require(`~/assets/img/weather/${imgUrl}.png`)"
      class="mb-4 w-24"
    />
    <p class="mb-4 text-lg font-semibold dark:text-sky-100">
      <slot name="temp"></slot>°C
    </p>
    <p class="text-base font-light text-gray-700 dark:text-sky-300">
      <slot name="day"></slot>
    </p>
  </div>
</template>
<script setup>
const props = defineProps({
  imgUrl: {
    type: String,
    required: true,
    default: 'fog',
  },
})
</script>
<style></style>
