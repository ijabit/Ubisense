import Vue from "vue";
import vueMoment from "vue-moment";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.use(vueMoment);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
