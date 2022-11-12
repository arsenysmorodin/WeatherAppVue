<template>
  <div class="flex flex-col">
    <CurrentTime class="mb-3"></CurrentTime>
    <CurrentDate class="pl-2"></CurrentDate>
  </div>
</template>

<script>
import CurrentTime from './CurrentTime.vue'

export default { components: { CurrentTime } }
</script>
