<template>
  <div :class="{ dark: this.$store.state.isDarkMode }">
    <div class="bg-sky-50 dark:bg-sky-900">
      <div class="mx-auto min-h-screen max-w-screen-xl px-7 pt-10">
        <div class="mb-7 flex">
          <HeaderWrp></HeaderWrp>
          <ChooseCityWrp></ChooseCityWrp>
        </div>
        <MainWrp></MainWrp>
      </div>
    </div>
  </div>
</template>
