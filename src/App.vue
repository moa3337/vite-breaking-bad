<script>
import AppMain from "./components/AppMain.vue"
import axios from "axios";
import { store } from "./data/store";

export default {
  data() {
    return {
      store,
      title: "Yu-Gi-Ho",
    };
  },

  components: { AppMain },


  created() {
    axios.get(store.endpoint).then((response) => {
      //console.log(response);
      store.characters = response.data.data;
    });
  },
};
</script>

<template>
  <h1 class="bg-light p-2">{{ title }}</h1>
  <AppMain />
</template>

<style lang="scss">
@use "./assets/scss/style.scss";
</style>
