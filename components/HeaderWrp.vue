<template>
  <div class="mr-4 flex w-3/5 flex-col">
    <CurrentTime class="mb-3"></CurrentTime>
    <div class="flex">
      <div class="w-2/3">
        <CurrentDate class="mb-3"></CurrentDate>
        <HelloUser class="mb-7"></HelloUser>
      </div>
      <div class="flex w-full justify-end">
        <ToogleMode></ToogleMode>
      </div>
    </div>
    <WeatherForecast></WeatherForecast>
  </div>
</template>

<script>
export default {}
</script>
