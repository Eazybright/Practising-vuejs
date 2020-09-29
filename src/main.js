import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
// import VueRx from "vue-rx";
// import { Observable, Subject } from "rxjs"

// Use the VueRx plugin with the entire RxJS library
// Vue.use(VueRx, {
//   Observable,
//   Subject
// })
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    },
  }
})
// store.commit('increment')
// store.commit('increment')
// store.commit('increment')
// store.commit('increment')
// store.commit('increment')
//
// console.log(store.state.count)

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router,
  render: h => h(App),
  store: store,
}).$mount('#app')
