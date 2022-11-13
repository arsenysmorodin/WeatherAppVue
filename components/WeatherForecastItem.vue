<template>
  <div
    class="flex flex-col items-center rounded-xl bg-white p-4 text-center shadow-lg shadow-slate-200"
  >
    <img
      :src="require(`~/assets/img/weather/${imgUrl}.png`)"
      class="mb-4 w-24"
    />
    <p class="mb-4 text-lg font-semibold"><slot name="temp"></slot>°C</p>
    <p class="font-light"><slot name="day"></slot></p>
  </div>
</template>
<script>
export default {
  props: {
    imgUrl: { type: String, required: true, default: 'fog' },
  },
}
</script>
<style></style>
