<template>
  <v-card class="mt-6" style="height: 100%">
    <div class="blue-grey darken-4">
      <v-card-title class="white--text justify-center">{{ workstation.name }}</v-card-title>
    </div>
    <div v-if="engine">
      <v-row class="pa-5">
        <v-col class="align-self-center col-xs-12 col-sm-5">
          <v-img
            :src="engine.image"
            class=" ma-4 ml-0"
          ></v-img>
        </v-col>
        <v-col>
          <v-row>
            <v-col>
              <span class="grey--text text-no-wrap">Serial Number</span>
              <p class="headline" v-text="engine.serialNumber"></p>

              <span class="grey--text text-no-wrap">Entry Time</span>
              <p class="headline">
                {{
                  new Date(workstation.currentProduct.entryTime) | moment("LT")
                }}
              </p>
            </v-col>
            <v-col>
              <span class="grey--text text-no-wrap">Model</span>
              <p class="headline" v-text="engine.model"></p>

              <span class="grey--text text-no-wrap">Cycle Time</span>
              <p class="headline">{{ workstation.cycleTimeHrs }} hr</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <span class="grey--text text-no-wrap">Time Elapsed</span>
              <v-progress-linear
                v-model="power"
                color="teal"
                height="10"
              ></v-progress-linear>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <v-row v-else class="pa-5" align="center" justify="center" style="height: 100%">
      <p class="headline text-no-wrap">No Product</p>
    </v-row>
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
    power: 70,
    engines: [{
      id: "604676cf40ef9e9137f831e7", serialNumber: "121612129", model: "5R", image: "https://i.postimg.cc/MKbJTkrx/5R.jpg",
    }, {
      id: "60467703c7e7ca6bca3b598c", serialNumber: "342612171", model: "2R", image: "https://i.postimg.cc/RVzz4CdX/2R.jpg",
    }, {
      id: "6046770b70a8ffd3e95e7dc8", serialNumber: "9232842345", model: "8R", image: "https://i.postimg.cc/cLxytDV3/8R.png",
    }, {
      id: "604677132b5381c3d19a0dcc", serialNumber: "784213414", model: "5R", image: "https://i.postimg.cc/MKbJTkrx/5R.jpg",
    }, {
      id: "6046771b40c3fce9a6f8c11f", serialNumber: "4315112123", model: "2R", image: "https://i.postimg.cc/RVzz4CdX/2R.jpg",
    }],
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
