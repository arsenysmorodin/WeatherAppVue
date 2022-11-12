<template>
  <div class="bg-sky-50">
    <div class="mx-auto min-h-screen max-w-screen-xl px-7 pt-10">
      <HeaderWrp></HeaderWrp>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  async mounted() {
    const axios = require('axios')

    try {
      const response = await axios.get(
        // 'https://api.openweathermap.org/data/2.5/forecast/daily?lat=60&lon=90&appid=a158065199118bd588aed3a9d406f38f&units=metric'
        `https://api.openweathermap.org/data/2.5/forecast?lat=60&lon=90&appid=a158065199118bd588aed3a9d406f38f&units=metric`
      )
      let result = response.data.list
      let now = new Date()
      let h = now.getHours()
      let num = 8 - Math.floor(h / 3)
      console.log('tommorow', result[num + 3].main.temp)
    } catch (error) {
      console.error(error)
    }
  },
}
</script>
