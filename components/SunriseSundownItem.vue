<template>
  <div class="flex w-1/2">
    <img class="w-1/4" :src="require(`~/assets/img/sun/${imgUrl}.png`)" />
    <p class="ml-8 self-center text-center text-3xl dark:text-sky-100">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      typeOf: String,
      required: true,
    },
  },
  computed: {
    imgUrl() {
      return this.type
    },
  },
}
</script>

<style></style>
