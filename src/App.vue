<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center flex-grow-1">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2 hidden-sm-and-down float-left"
          contain
          src="https://ubisense.com/wp-content/uploads/2019/11/Ubisene-logo-200px.png"
          transition="scale-transition"
          width="200"
        />
        <div class="title-spacer hidden-sm-and-down"></div>
        <div class="flex-grow-1 text-center text-no-wrap text-h5 app-bar-title float-left">Work Stations</div>
      </div>

    </v-app-bar>

    <v-main style="height: 100%">
      <Home />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Home from "./views/Home.vue";

export default Vue.extend({
  name: "App",

  components: {
    Home,
  },
  data: () => ({
    //
  }),
});
</script>
<style lang="scss" scoped>
  .title-spacer {
    margin-left: -200px
  }
</style>
