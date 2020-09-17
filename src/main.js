import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import VueRx from "vue-rx";
// import { Observable, Subject } from "rxjs"

// Use the VueRx plugin with the entire RxJS library
// Vue.use(VueRx, {
//   Observable,
//   Subject
// })
Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
