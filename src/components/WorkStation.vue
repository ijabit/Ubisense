<template>
  <v-card>
    <div class="blue-grey darken-4">
      <v-card-title class="white--text justify-center">{{ workstation.name }}</v-card-title>
    </div>
    <div v-if="engine" class="d-flex flex-wrap justify-space-between ma-5">
      <v-img
        :src="engine.image"
        max-width="150px"
        class="align-self-center ma-4 ml-0"
      ></v-img>
      <div>
        <span class="grey--text">Serial Number</span>
        <p class="headline" v-text="engine.serialNumber"></p>

        <span class="grey--text">Entry Time</span>
        <p class="headline">
          {{ new Date(workstation.currentProduct.entryTime) | moment("LT") }}
        </p>

        <div>
          <span class="grey--text">Time Elapsed</span>
          <div>test test test test test test test test test </div>
        </div>
      </div>
      <div>
        <span class="grey--text">Model</span>
        <p class="headline" v-text="engine.model"></p>

        <span class="grey--text">Cycle Time</span>
        <p class="headline">{{ workstation.cycleTimeHrs }} hr</p>
      </div>

    </div>
    <div v-else>
      <p class="headline">No Product</p>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "WorkStation",
  props: {
    workstation: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    engines: [
      {
        id: "604676cf40ef9e9137f831e7",
        serialNumber: "121612129",
        model: "5R",
        image: "https://i.postimg.cc/MKbJTkrx/5R.jpg",
      },
      {
        id: "60467703c7e7ca6bca3b598c",
        serialNumber: "342612171",
        model: "2R",
        image: "https://i.postimg.cc/RVzz4CdX/2R.jpg",
      },
      {
        id: "6046770b70a8ffd3e95e7dc8",
        serialNumber: "9232842345",
        model: "8R",
        image: "https://i.postimg.cc/cLxytDV3/8R.png",
      },
      {
        id: "604677132b5381c3d19a0dcc",
        serialNumber: "784213414",
        model: "5R",
        image: "https://i.postimg.cc/MKbJTkrx/5R.jpg",
      },
      {
        id: "6046771b40c3fce9a6f8c11f",
        serialNumber: "4315112123",
        model: "2R",
        image: "https://i.postimg.cc/RVzz4CdX/2R.jpg",
      },
    ],
  }),
  computed: {
    engine(): any {
      const engine = this.engines.find(
        (x: any): any => this.workstation
          && this.workstation.currentProduct
          && x.id === this.workstation.currentProduct.id,
      );
      return typeof engine === "undefined" || engine === null ? null : engine;
    },
  },
});
</script>
