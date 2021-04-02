<template>
  <v-card class="mt-6" style="height: 100%">
    <div class="blue-grey darken-4">
      <v-card-title class="white--text justify-center">{{
        workstation.name
      }}</v-card-title>
    </div>
    <div v-if="engine">
      <v-row class="pa-5">
        <v-col class="align-self-center col-xs-12 col-sm-5">
          <v-img :src="engine.image" class="ma-4 ml-0"></v-img>
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
              <span class="grey--text text-no-wrap mr-2">Time Elapsed</span>
              <v-icon
                v-if="engineCycleWarning"
                color="orange darken-2"
                :title="`Elapsed Minutes: ${timeElapsedInMinutes}`"
                >mdi-thermometer-alert</v-icon
              >
              <v-icon
                v-if="engineCycleError"
                color="red darken-2"
                :title="`Elapsed Minutes: ${timeElapsedInMinutes}`"
                >mdi-alert-circle</v-icon
              >
              <v-progress-linear
                v-model="cyclePercent"
                :color="cycleColor"
                height="10"
                :title="`Elapsed Minutes: ${timeElapsedInMinutes}`"
              ></v-progress-linear>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <v-row
      v-else
      class="pa-5"
      align="center"
      justify="center"
      style="height: 100%"
    >
      <p class="headline text-no-wrap">No Product</p>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import moment from "moment";
import store from "@/api/store";
import Vue from "vue";

export default Vue.extend({
  props: {
    workstation: {
      type: Object,
      required: true,
    },
  },
  computed: {
    cycleColor() {
      if (this.engineCycleWarning) {
        return "orange";
      }
      if (this.engineCycleError) {
        return "red";
      }
      return "teal";
    },
    engineCycleWarning(): boolean {
      return this.cyclePercent >= 70 && this.cyclePercent < 95;
    },
    engineCycleError(): boolean {
      return this.cyclePercent >= 95;
    },
    engines(): any[] {
      return store.state.engines;
    },
    engine(): any {
      const engine = this.engines.find(
        (x: any): any => this.workstation
          && this.workstation.currentProduct
          && x.id === this.workstation.currentProduct.id,
      );
      return typeof engine === "undefined" || engine === null ? null : engine;
    },
    timeElapsedInMinutes(): number {
      const timeElapsedInMinutes = moment(store.state.currentDateTime).diff(
        moment(new Date(this.workstation.currentProduct.entryTime)),
        "minutes",
      );

      return timeElapsedInMinutes;
    },
    cyclePercent(): number {
      return (
        (this.timeElapsedInMinutes / (this.workstation.cycleTimeHrs * 60)) * 100
      );
    },
  },
});
</script>
