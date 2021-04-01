<template>
  <div class="home grey lighten-2" style="height: 100%">
    <v-container>
      <work-station-manager />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import WorkStationManager from "@/components/WorkStationManager.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "Home",
  components: {
    WorkStationManager,
  },
});
</script>
