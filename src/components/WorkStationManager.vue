<template>
    <div>
      <v-row v-if="dataLoaded && !hasDataFetchError">
        <v-col
          md="6"
          sm="12"
          v-for="workstation in store.state.workstations"
          :key="workstation.name"
        >
          <work-station :workstation="workstation" />
        </v-col>
      </v-row>
      <v-alert type="error" v-if="hasDataFetchError">
        Failed to retrieve data. Please try again.
      </v-alert>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/api/store";
import WorkStation from "./WorkStation.vue";

export default Vue.extend({
  components: { WorkStation },
  data: () => ({
    dataLoaded: false,
    dataFetchErrorMessage: "",
  }),
  created() {
    fetch("https://ubisense-takehome-api.netlify.app/.netlify/functions/workstations")
      .then((response) => {
        if (!response.ok) {
          this.dataFetchErrorMessage = response.statusText;
          return;
        }

        response.json()
          .then((json) => {
            store.setWorkstations(json);
            if (store.state.engines.length > 0) {
              this.dataLoaded = true;
            }
          }).catch(this.errorHandler);
      }).catch(this.errorHandler);

    fetch("https://ubisense-takehome-api.netlify.app/.netlify/functions/engines")
      .then((response) => {
        if (!response.ok) {
          this.dataFetchErrorMessage = response.statusText;
          return;
        }

        response.json()
          .then((json) => {
            store.setEngines(json);
            if (store.state.workstations.length > 0) {
              this.dataLoaded = true;
            }
          }).catch(this.errorHandler);
      }).catch(this.errorHandler);
  },
  computed: {
    hasDataFetchError() {
      return this.dataFetchErrorMessage !== null && this.dataFetchErrorMessage !== "";
    },
    store() {
      return store;
    },
  },
  methods: {
    errorHandler(response: any) {
      this.dataFetchErrorMessage = response.message;
    },
  },
  watch: {
    dataFetchErrorMessage(newValue: string) {
      console.error(newValue);
    },
  },
});
</script>
