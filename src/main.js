import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";
import Element from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import store from "@/store";
import mavonEditor  from "mavon-editor"
import * as filters from "@/filters" // 全局注册

window.bus = new Vue();

Vue.use(mavonEditor)
Vue.use(Element, { size: "small" })

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
})

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app")

