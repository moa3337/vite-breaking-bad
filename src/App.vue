<script>
import AppMain from './components/AppMain.vue';

export default {
  data() {
    return {
      title: "Yugi-Ho",
    };
  },

  components: { AppMain },
};
</script>

<template>
  <h1 class="text-center">{{ title }}</h1>

  <AppMain />
</template>

<style lang="scss">
@use "./assets/scss/style.scss";
</style>
