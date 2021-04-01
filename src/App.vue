<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://ubisense.com/wp-content/uploads/2019/11/Ubisene-logo-200px.png"
          transition="scale-transition"
          width="200"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
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
