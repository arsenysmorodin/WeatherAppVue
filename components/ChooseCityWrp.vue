<template>
  <div class="w-2/5 rounded-xl bg-white p-5 shadow-lg shadow-slate-200">
    <ChooseCityInput class="mb-3"></ChooseCityInput>
    <p class="mb-3 text-lg text-sky-500">Latest locations:</p>
    <div>
      <ChooseCityItem
        :key="index"
        :index="index"
        v-for="(item, index) in this.$store.state.locations"
      >
        {{ item.name }}
      </ChooseCityItem>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style></style>
