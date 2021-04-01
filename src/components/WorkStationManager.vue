<template>
  <v-container>
    <v-row>
      <v-col
        md="6"
        sm="12"
        v-for="workstation in workstations"
        :key="workstation.name"
      >
        <work-station :workstation="workstation" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import WorkStation from "./WorkStation.vue";

export default Vue.extend({
  components: { WorkStation },
  name: "HelloWorld",

  data: () => ({
    workstations: [
      {
        name: "Assembly A",
        cycleTimeHrs: 1.5,
        currentProduct: {
          id: "604676cf40ef9e9137f831e7",
          entryTime: 1615229929818,
        },
      },
      {
        name: "Assembly B",
        cycleTimeHrs: 1,
        currentProduct: {
          id: "604676cf40ef9e9137f831e7",
          entryTime: 1615230589818,
        },
      },
      { name: "Assembly C", cycleTimeHrs: 2, currentProduct: null },
      {
        name: "Inspection",
        cycleTimeHrs: 0.5,
        currentProduct: {
          id: "604676cf40ef9e9137f831e7",
          entryTime: 1615231489818,
        },
      },
    ],
  }),
});
</script>
