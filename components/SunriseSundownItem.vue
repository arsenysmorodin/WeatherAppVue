<template>
  <div class="flex w-1/2">
    <img class="w-1/4" :src="require(`~/assets/img/sun/${typeImg}.png`)" />
    <p class="ml-8 self-center text-center text-3xl dark:text-sky-100">
      <slot></slot>
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  typeImg: {
    type: String,
    required: true,
  },
})
</script>
