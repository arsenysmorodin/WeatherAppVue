<template>
  <div class="flex">
    <input type="text" class="h-12 w-full rounded-l-xl bg-sky-50 p-3" />
    <button
      class="h-12 w-12 rounded-r-xl bg-sky-50 bg-center bg-no-repeat backdrop-opacity-50"
      :style="css"
    ></button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      css: {
        backgroundImage: `url(${require('@/assets/img/search.png')})`,
        backgroundSize: '2rem 2rem',
      },
    }
  },
}
</script>
<style></style>
