<template>
  <div class="text-lg text-gray-700 dark:text-sky-300">
    {{ currentDate.dayOfWeek }}, {{ currentDate.day }} {{ currentDate.month }},
    {{ currentDate.year }}
  </div>
</template>

<script setup>
import { computed } from 'vue'

const currentDate = computed(() => {
  const date = new Date()

  const currentDate = {
    dayOfWeek: date.getDay(),
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  }

  switch (currentDate.dayOfWeek) {
    case 0:
      currentDate.dayOfWeek = 'Sunday'
      break
    case 1:
      currentDate.dayOfWeek = 'Monday'
      break
    case 2:
      currentDate.dayOfWeek = 'Thusday'
      break
    case 3:
      currentDate.dayOfWeek = 'Wednesday'
      break
    case 4:
      currentDate.dayOfWeek = 'Thursday'
      break
    case 5:
      currentDate.dayOfWeek = 'Friday'
      break
    case 6:
      currentDate.dayOfWeek = 'Saturday'
      break
  }

  switch (currentDate.month) {
    case 0:
      currentDate.month = 'January'
      break
    case 1:
      currentDate.month = 'February'
      break
    case 2:
      currentDate.month = 'March'
      break
    case 3:
      currentDate.month = 'April'
      break
    case 4:
      currentDate.month = 'May'
      break
    case 5:
      currentDate.month = 'June'
      break
    case 6:
      currentDate.month = 'July'
      break
    case 7:
      currentDate.month = 'August'
      break
    case 8:
      currentDate.month = 'September'
      break
    case 9:
      currentDate.month = 'October'
      break
    case 10:
      currentDate.month = 'November'
      break
    case 11:
      currentDate.month = 'December'
      break
  }
  return currentDate
})
</script>
