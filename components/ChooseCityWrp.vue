<template>
  <div
    class="w-2/5 rounded-xl bg-white p-5 shadow-lg shadow-slate-200 dark:bg-sky-800 dark:shadow-none"
  >
    <ChooseCityInput class="mb-3"></ChooseCityInput>
    <p class="mb-3 text-lg text-sky-500 dark:text-sky-300">Latest locations:</p>
    <div>
      <ChooseCityItem
        :key="index"
        :index="index"
        v-for="(item, index) in locations()"
      >
        {{ item.name }}
      </ChooseCityItem>
    </div>
  </div>
</template>
<script setup>
import { useStore } from '@nuxtjs/composition-api'
const store = useStore()

const locations = () => {
  return store.state.locations
}
</script>
