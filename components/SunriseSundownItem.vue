<template>
  <div class="flex">
    <img class="w-1/4" :src="require(`~/assets/img/sun/${imgUrl}.png`)" />
    <p class="ml-8 self-center text-center text-3xl">
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
