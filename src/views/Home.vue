<template>
  <div class="home">
    <work-station-manager />
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
