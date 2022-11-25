<template>
  <div class="w-2/5 rounded-xl bg-white p-5 shadow-lg shadow-slate-200">
    <h3 class="mb-5 text-lg text-gray-700">Choose city</h3>
    <ChooseCityInput class="mb-5"></ChooseCityInput>
    <ChooseCityItem
      :key="index"
      v-for="(item, index) in this.$store.state.locations"
      >{{ item.name }}</ChooseCityItem
    >
  </div>
</template>
<script>
export default {}
</script>
<style></style>
